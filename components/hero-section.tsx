import { Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/dj-mixing-console-with-orange-neon-lights-dark-clu.jpg" alt="DJ mezclando" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.jpg" 
            alt="Papa Oso DJ" 
            width={160} 
            height={120}
            className="h-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="https://www.facebook.com/escuelaparadj"
            target="_blank"
            className="text-white hover:text-red-500 transition-colors font-semibold"
          >
            Facebook
          </Link>
          <Link
            href="#registro"
            className="bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-700 transition-colors rounded-lg"
          >
            Inscríbete Gratis
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-12">
        <div className="space-y-8 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600 rounded-full px-5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-sm text-red-600 font-semibold uppercase tracking-wide">5 Clases 100% Gratis</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none">
            EL DESPERTAR
            <br />
            <span className="text-red-600">DEL DJ</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            by <span className="text-white">Papa Oso</span>
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Semana del DJ: <span className="text-white font-semibold">5 días de clases en vivo</span> donde
            aprenderás a mezclar como profesional. Sin costo. Sin trucos. Solo conocimiento real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#registro"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 font-bold text-lg hover:bg-red-700 transition-all rounded-lg"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Quiero Inscribirme Gratis
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-red-600">5</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Días de clase</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-red-600">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Gratis</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-red-600">VIP</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Grupo WhatsApp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="animate-bounce">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
