import HeroSlider from '@/src/components/HeroSlider'
import MotMaire from '@/src/components/MotMaire'
import Prestations from '@/src/components/Prestations'
import SectionActualites from '@/src/components/SectionActualites'
import SectionProjets from '@/src/components/SectionProjets'
import SectionDocuments from '@/src/components/SectionDocuments'
import SectionEvenements from '@/src/components/SectionEvenements'
import SectionMarches from '@/src/components/SectionMarches'
import SectionRecrutements from '@/src/components/SectionRecrutements'
import SectionLiensUtiles from '@/src/components/SectionLiensUtiles'
import SectionPartenaires from '@/src/components/SectionPartenaires'
import SectionContact from '@/src/components/SectionContact'
import ScrollReveal from '@/src/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MotMaire />
      <ScrollReveal>
        <Prestations />
      </ScrollReveal>
      <ScrollReveal>
        <SectionActualites />
      </ScrollReveal>
      <ScrollReveal>
        <SectionProjets />
      </ScrollReveal>
      <ScrollReveal>
        <SectionDocuments />
      </ScrollReveal>
      <ScrollReveal>
        <SectionEvenements />
      </ScrollReveal>
      <ScrollReveal>
        <SectionMarches />
      </ScrollReveal>
      <ScrollReveal>
        <SectionRecrutements />
      </ScrollReveal>
      <ScrollReveal>
        <SectionLiensUtiles />
      </ScrollReveal>
      <ScrollReveal>
        <SectionPartenaires />
      </ScrollReveal>
      <ScrollReveal>
        <SectionContact />
      </ScrollReveal>
    </>
  )
}
