import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Înmatriculări auto Cluj-Napoca: acte și asistență | Acte Auto 502'
const description = 'Asistență pentru înmatriculări auto în Cluj-Napoca: pregătirea documentelor, pașii de urmat și servicii conexe. Contactează Acte Auto 502.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/inmatriculari-auto-cluj' },
  openGraph: { title, description, url: '/inmatriculari-auto-cluj', locale: 'ro_RO', type: 'website', siteName: 'Acte Auto 502' },
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
      <section><h2>Ce acte sunt necesare?</h2><div><p>Lista depinde de situația vehiculului: de exemplu, dacă este nou, a mai fost înmatriculat în România sau a fost înmatriculat anterior în străinătate. Nu există o listă unică potrivită tuturor cazurilor.</p><p>Poți verifica cerințele pentru operațiunea ta pe <a href="https://dgpci.mai.gov.ro/documents-and-forms/inmatriculari" target="_blank" rel="noopener noreferrer">pagina oficială DGPCI cu documentele necesare</a>. Contactează-ne dacă vrei să discutăm ce documente se aplică situației tale.</p></div></section>
      <section><h2>Înainte să ne contactezi</h2><div><p>Spune-ne dacă mașina este nouă sau rulată, unde a fost înmatriculată anterior și ce demers dorești să faci. Nu trimite copii ale actelor sau date sensibile în mesajul inițial.</p><p>Documentele, costurile și durata pot fi diferite de la un caz la altul; le clarificăm împreună după ce aflăm detaliile.</p></div></section>
      <section><h2>Unde ne găsești</h2><div><p>Biroul Acte Auto 502 este pe Bulevardul Eroilor nr. 7, Cluj-Napoca. Oferim servicii în Cluj-Napoca și împrejurimi, până la 40 km de oraș.</p><p>Sună la <a href="tel:0753867235">0753.867.235</a> sau <Link href="/#contact">contactează-ne pe WhatsApp</Link> pentru informații potrivite situației tale.</p></div></section>
    </div>
  </div></main>
}
