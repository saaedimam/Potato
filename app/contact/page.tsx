import Section from '../../components/Section'

export const metadata = { title: 'Contact — Saaed Imam' }

export default function Contact(){
  return (
    <Section id="contact" className="text-center pb-24 px-4">
      <h1 className="text-3xl font-semibold tracking-tight">Let&apos;s build.</h1>
      <p className="opacity-70 mt-2">Say hello at <a className="underline underline-offset-4" href="mailto:sayedimam.fahim@gmail.com">sayedimam.fahim@gmail.com</a></p>
    </Section>
  )
}
