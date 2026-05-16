import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 lg:px-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="block transition-opacity hover:opacity-85" aria-label="DS Conseil Immobilier">
            <img
              src="/logo_ds_conseil.png"
              alt="DS Conseil Immobilier"
              className="h-14 w-auto max-w-[130px] rounded-[8px] object-contain"
            />
          </Link>
          <span className="label-mono">Bamako, Mali</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {[['Accueil', '/'], ['Acheter', '/#acheter'], ['Vendre', '/#vendre'], ['Louer', '/#louer'], ['Investir', '/#investir'], ['Analyse Dossier', '/pre-analysis'], ['FAQ', '/faq'], ['Contact', '/contact'], ['Politique de confidentialite', '/privacy']].map(([l, t]) => (
            <Link key={t} to={t} className="label-mono transition-colors hover:text-[#C9A84C]">{l}</Link>
          ))}
          <span className="label-mono">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
