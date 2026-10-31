import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Înmatriculări auto Cluj-Napoca: acte și asistență | Acte Auto 502'
const description = 'Asistență pentru înmatriculări auto în Cluj-Napoca: pregătirea documentelor, pașii de urmat și servicii conexe. Contactează Acte Auto 502.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/inmatriculari-auto-cluj' },
  openGraph: { title, description, url: '/inmatriculari-auto-cluj', locale: 'ro_RO', type: 'website', siteName: 'Acte Auto 502', images: [{ url: '/images/hero-road-v2.png', alt: 'Autoturism pe un drum de munte la amurg' }] },
}

export default function RegistrationPage() {
  return <main className="privacy-page"><div className="privacy-wrap">
    <Link href="/" className="privacy-back">← ÎNAPOI LA SITE</Link>
    <span className="eyebrow"><span/> ACTE AUTO 502 · CLUJ-NAPOCA</span>
    <h1>Înmatriculări auto <em>în Cluj-Napoca.</em></h1>
    <p className="privacy-intro">Te ajutăm să pregătești documentele și să înțelegi pașii pentru înmatricularea autovehiculului. Suntem un serviciu privat de intermediere, nu o instituție publică.</p>
    <div className="guide-actions"><a className="button button-light" href="tel:0753867235">Sună: 0753.867.235 ↗</a><a className="text-link" href="/#contact">Scrie-ne pe WhatsApp ↗</a></div>
    <div className="privacy-content">
      <section><h2>Cum te ajutăm</h2><div><p>Spune-ne situația mașinii tale și documentele pe care le ai. Îți explicăm ce urmează, verificăm actele și clarificăm ce lipsește. Îți comunicăm costurile pentru cazul tău înainte să începem.</p><p>În funcție de nevoile tale, te putem ajuta și cu contracte de vânzare-cumpărare, înregistrarea la primărie, numere provizorii sau definitive, traduceri autorizate și demersuri legate de RAR și ITP.</p></div></section>
      <section><h2>Ce acte sunt necesare?</h2><div><p>Lista depinde de situația vehiculului. Pe <a href="https://dgpci.mai.gov.ro/documents-and-forms/inmatriculari" target="_blank" rel="noopener noreferrer">pagina oficială DGPCI cu documentele necesare</a>, caută operațiunea care se potrivește cazului tău:</p><ul><li>transcrierea unui vehicul înmatriculat anterior în România;</li><li>înmatricularea unui vehicul nou, care nu a mai fost înmatriculat;</li><li>înmatricularea unui vehicul înmatriculat anterior în afara României;</li><li>autorizarea provizorie pentru circulație.</li></ul><p>Contactează-ne dacă vrei să discutăm ce documente se aplică situației tale și ce ai de pregătit.</p></div></section>
      <section><h2>Înainte să ne contactezi</h2><div><p>Spune-ne dacă mașina este nouă sau rulată, unde a fost înmatriculată anterior și ce demers dorești să faci. Nu trimite copii ale actelor sau date sensibile în mesajul inițial.</p><p>Documentele, costurile și durata pot fi diferite de la un caz la altul; le clarificăm împreună după ce aflăm detaliile.</p></div></section>
      <section><h2>Unde ne găsești</h2><div><p>Biroul Acte Auto 502 este pe Bulevardul Eroilor nr. 7, Cluj-Napoca. Te rugăm să suni înainte de vizită, deoarece nu suntem întotdeauna la birou. Oferim servicii în Cluj-Napoca și împrejurimi, până la 40 km de oraș.</p><p>Sună la <a href="tel:0753867235">0753.867.235</a> sau <Link href="/#contact">trimite-ne un mesaj prin WhatsApp</Link> pentru informații potrivite situației tale.</p></div></section>
    </div>
    <p className="guide-business">Acte Auto 502 este un serviciu privat oferit de AGRAFE BIROTIC&amp;COPY SOLUTIONS S.R.L., CUI 42410049. <Link href="/confidentialitate">Politica de confidențialitate</Link> · <Link href="/#servicii">Toate serviciile</Link></p>
  </div></main>
}
