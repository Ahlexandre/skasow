import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-12">
        <div>
          <p className="text-lg font-bold text-[#111111]">
            DS Conseil Immobilier
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#6B7280]">
            Une vitrine numérique pour orienter, qualifier et accompagner les
            projets immobiliers au Mali.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#111111]">Navigation</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#6B7280]">
            <Link className="transition hover:text-[#111111]" to="/services">
              Services immobiliers
            </Link>
            <Link className="transition hover:text-[#111111]" to="/pre-analysis">
              Pré-analyse IA
            </Link>
            <Link className="transition hover:text-[#111111]" to="/chatbot">
              Chatbot immobilier
            </Link>
            <Link className="transition hover:text-[#111111]" to="/auth">
              Connexion
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#111111]">Contact</p>
          <p className="mt-4 text-sm leading-7 text-[#6B7280]">
            Bamako, Mali
            <br />
            contact@dsconseil-immo.ml
            <br />
            +223 70 00 00 00
          </p>
        </div>
      </div>
    </footer>
  )
}
