import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

function generateToken(email: string): string {
  return crypto
    .createHmac('sha256', process.env.SMTP_PASS || 'newsletter-secret')
    .update(email.toLowerCase())
    .digest('hex')
    .slice(0, 32)
}

function buildUnsubscribeUrl(email: string, token: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return `${base}/se-desabonner?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`
}

function buildWelcomeHtml(nom: string, email: string, unsubscribeUrl: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenue dans la newsletter de la Commune d'Adja-Ouere</title>
</head>
<body style="margin:0;padding:0;background-color:#F8F6F1;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F6F1;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E8E4DC;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0A3D2E;padding:40px 48px 36px;">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;color:#C9A84C;letter-spacing:2px;text-transform:uppercase;">Commune d'Adja-Ouere</p>
              <h1 style="margin:0;font-size:32px;font-weight:700;color:#FFFFFF;line-height:1.2;">Bienvenue dans notre newsletter</h1>
              <div style="width:48px;height:2px;background-color:#C9A84C;margin-top:16px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;">
              <p style="margin:0 0 20px 0;font-size:16px;line-height:1.7;color:#1C1C1C;">
                Bonjour <strong style="color:#0A3D2E;">${nom}</strong>,
              </p>
              <p style="margin:0 0 20px 0;font-size:16px;line-height:1.7;color:#4A4A4A;">
                Nous sommes ravis de vous accueillir parmi les abonnes a la newsletter officielle de la <strong>Commune d'Adja-Ouere</strong>.
              </p>
              <p style="margin:0 0 28px 0;font-size:16px;line-height:1.7;color:#4A4A4A;">
                Vous recevrez desormais les actualites, avis officiels, evenements et informations sur les projets de developpement de notre commune directement dans votre boite mail.
              </p>

              <!-- Info box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background-color:rgba(10,61,46,0.06);border:1px solid rgba(10,61,46,0.15);border-left:4px solid #C9A84C;border-radius:8px;padding:20px 24px;">
                    <p style="margin:0;font-size:14px;line-height:1.6;color:#0A3D2E;font-weight:600;">
                      Ce que vous recevrez :
                    </p>
                    <ul style="margin:8px 0 0 0;padding-left:20px;font-size:14px;line-height:1.8;color:#4A4A4A;">
                      <li>Actualites et communiques officiels</li>
                      <li>Avis de marches et appels d'offres</li>
                      <li>Evenements locaux et celebrations</li>
                      <li>Projets de developpement communal</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px 0;font-size:14px;color:#6A6A6A;line-height:1.6;">
                La Commune d'Adja-Ouere — Departement du Plateau, Benin
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F8F6F1;border-top:1px solid #E8E4DC;padding:24px 48px;">
              <p style="margin:0 0 8px 0;font-size:12px;color:#9A9A9A;line-height:1.6;">
                Vous recevez cet email car vous vous etes inscrit a la newsletter de la Commune d'Adja-Ouere avec l'adresse <strong>${email}</strong>.
              </p>
              <p style="margin:0;font-size:12px;color:#9A9A9A;line-height:1.6;">
                Pour vous desabonner a tout moment, cliquez ici :
                <a href="${unsubscribeUrl}" style="color:#C9A84C;text-decoration:underline;">Se desabonner</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = String(body.email || '').trim().toLowerCase()
    const nom = String(body.nom || '').trim()

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }
    if (!nom) {
      return NextResponse.json({ error: 'Le nom est requis' }, { status: 400 })
    }

    const token = generateToken(email)
    const unsubscribeUrl = buildUnsubscribeUrl(email, token)

    if (process.env.SMTP_USER) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.default.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        await transporter.sendMail({
          from: `"Commune d'Adja-Ouere" <${process.env.SMTP_USER}>`,
          to: email,
          subject: "Bienvenue dans la newsletter de la Commune d'Adja-Ouere",
          html: buildWelcomeHtml(nom, email, unsubscribeUrl),
        })
      } catch (mailError) {
        console.error('[Newsletter] Erreur envoi email:', mailError)
      }
    } else {
      console.log('[Newsletter] SMTP non configure — email non envoye pour:', email)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[Newsletter] Erreur inattendue:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const email = (searchParams.get('email') || '').trim().toLowerCase()
    const token = (searchParams.get('token') || '').trim()

    if (!email || !token) {
      return NextResponse.json({ error: 'Parametres manquants' }, { status: 400 })
    }

    const expectedToken = generateToken(email)
    if (token !== expectedToken) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 400 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[Newsletter] Erreur desabonnement:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
