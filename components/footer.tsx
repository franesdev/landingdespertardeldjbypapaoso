import { Music } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl tracking-wider text-white">PAPA OSO DJ</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://www.facebook.com/escuelaparadj"
              target="_blank"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              Facebook
            </Link>
            <Link href="#programa" className="text-gray-400 hover:text-red-600 transition-colors">
              Programa
            </Link>
            <Link href="#registro" className="text-gray-400 hover:text-red-600 transition-colors">
              Inscríbete
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Papa Oso DJ - El Despertar del DJ. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
