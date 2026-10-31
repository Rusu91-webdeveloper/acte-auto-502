import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica de confidențialitate | Acte Auto 502',
  description: 'Informații despre prelucrarea datelor personale în relația cu Acte Auto 502.',
  alternates: { canonical: '/confidentialitate' },
  openGraph: {
    title: 'Politica de confidențialitate | Acte Auto 502',
    description: 'Informații despre prelucrarea datelor personale în relația cu Acte Auto 502.',
    url: '/confidentialitate',
    locale: 'ro_RO',
    type: 'website',
    siteName: 'Acte Auto 502',
  },
}

export default function PrivacyPage() {
  return <main className="privacy-page"><div className="privacy-wrap">
    <Link href="/" className="privacy-back">← ÎNAPOI LA SITE</Link>
    <span className="eyebrow"><span/> INFORMAȚII PENTRU CLIENȚI</span>
    <h1>Politica de <em>confidențialitate.</em></h1>
    <p className="privacy-intro">Cum folosim informațiile pe care ni le oferi atunci când ne contactezi sau apelezi la serviciile Acte Auto 502.</p>
    <div className="privacy-content">
      <section><h2>Cine suntem</h2><p>Operatorul datelor este AGRAFE BIROTIC&amp;COPY SOLUTIONS S.R.L., CUI 42410049, nr. Reg. Com. J12/1051/2020, cu sediul în Strada Stejarului nr. 21, etaj 1, ap. 11, Florești, județul Cluj. Ne poți contacta la <a href="mailto:acteauto502@gmail.com">acteauto502@gmail.com</a> sau la <a href="tel:0753867235">0753.867.235</a>.</p></section>
      <section><h2>Ce date folosim și de ce</h2><p>Când ne contactezi, putem primi numărul de telefon, numele, adresa de e-mail și informațiile pe care alegi să ni le comunici. Dacă soliciți un serviciu, putem primi și documentele necesare pentru acesta. Folosim aceste informații pentru a răspunde solicitării, a discuta oferta și, după caz, a presta serviciul și a respecta obligațiile legale aplicabile.</p><p>În funcție de situație, temeiul prelucrării poate fi efectuarea demersurilor solicitate înainte de încheierea unui contract, executarea contractului sau îndeplinirea unei obligații legale.</p></section>
      <section><h2>Cât timp păstrăm datele</h2><p>Potrivit practicii comunicate de firmă, informațiile și documentele necesare serviciilor sunt păstrate până la finalizarea acestora. Dacă nu este solicitat un serviciu, acestea nu sunt păstrate. Unele documente sau date pot trebui păstrate mai mult atunci când există o obligație legală aplicabilă.</p></section>
      <section><h2>WhatsApp și alte servicii</h2><p>Câmpul de pe site pregătește un mesaj și deschide WhatsApp; mesajul este trimis numai după ce îl expediezi din WhatsApp. Nu introduce în mesajul inițial date sensibile sau copii ale actelor. WhatsApp prelucrează date potrivit propriei <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politici de confidențialitate</a>. Linkul către Google Maps te duce pe un serviciu extern, unde se aplică <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politica Google</a>.</p><p>Datele necesare soluționării cererii pot fi comunicate autorităților sau furnizorilor implicați, în măsura necesară serviciului solicitat și potrivit legii.</p></section>
      <section><h2>Vizitarea site-ului</h2><p>Furnizorul de găzduire poate prelucra date tehnice necesare funcționării și securității site-ului. Site-ul este configurat să utilizeze Vercel Web Analytics în mediul de producție; activarea și informațiile colectate depind de găzduirea și configurarea efectivă. Detalii despre acest serviciu sunt disponibile în <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">documentația Vercel</a>.</p></section>
      <section><h2>Drepturile tale</h2><p>În condițiile legii, poți solicita accesul la datele tale, rectificarea, ștergerea, restricționarea prelucrării sau portabilitatea lor și te poți opune anumitor prelucrări. Pentru solicitări, scrie-ne la <a href="mailto:acteauto502@gmail.com">acteauto502@gmail.com</a>. Ai și dreptul de a depune o plângere la <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal</a>.</p></section>
    </div>
  </div></main>
}
