import { Disc3 } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Disc3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wider text-foreground">PAPA OSO DJ</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://www.facebook.com/escuelaparadj"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </Link>
            <Link href="#programa" className="text-muted-foreground hover:text-primary transition-colors">
              Programa
            </Link>
            <Link href="#registro" className="text-muted-foreground hover:text-primary transition-colors">
              Inscríbete
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Papa Oso DJ - El Despertar del DJ. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
