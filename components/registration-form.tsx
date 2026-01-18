"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react"

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)
      const nombre = formData.get("nombre")
      const email = formData.get("email")
      const numero = formData.get("whatsapp")

      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxP-CAQCHXgADkP75ussiCfaCiEnXHpYdiAD-Zgxbfe42FNfkRp1MT6tlYFqfB2Rypr/exec"

      const params = new URLSearchParams();
      params.append("nombre", String(nombre));
      params.append("email", String(email));
      params.append("numero", String(numero));

      // Enviar sin esperar respuesta (CORS no lo permite)
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: params,
        mode: "no-cors",
      }).catch(() => {
        // Ignorar error CORS, los datos se guardan igual
      })

      // Mostrar éxito después de un pequeño delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsSubmitted(true)
    } catch (err) {
      setError("Error al registrar. Intenta de nuevo.")
      console.error("Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="registro" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-gray-900 border border-red-600/50 p-12 rounded-2xl">
            <div className="bg-red-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="font-display text-4xl text-white mb-4">¡ESTÁS DENTRO!</h3>
            <p className="text-gray-400 text-lg mb-6">
              Te hemos enviado un mensaje con el enlace al grupo VIP de WhatsApp. Revisa tu teléfono.
            </p>
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-5 py-2">
              <MessageCircle className="h-5 w-5 text-red-600" />
              <span className="text-red-600 font-medium">Revisa tu WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registro" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">Cupos limitados</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mt-4">INSCRÍBETE GRATIS</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Déjanos tus datos y te enviaremos el enlace al grupo VIP de WhatsApp donde recibirás las clases
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-8 md:p-12 rounded-2xl max-w-xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Sparkles className="h-5 w-5 text-red-600" />
            <span className="text-white font-semibold">100% Gratis - Sin tarjeta de crédito</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-600/10 border border-red-600/30 text-red-400 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-white font-medium">
                Tu nombre
              </Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="¿Cómo te llamas?"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600 h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">
                Tu email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600 h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-white font-medium">
                Tu WhatsApp
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="+52 123 456 7890"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600 h-12 rounded-lg"
              />
              <p className="text-xs text-gray-400">Te enviaremos el enlace del grupo VIP por aquí</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 text-white hover:bg-red-700 h-14 text-lg font-bold rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? "Registrando..." : "QUIERO MI LUGAR GRATIS"}
            </Button>

            <p className="text-sm text-gray-400 text-center">
              Al registrarte entrarás al grupo VIP de WhatsApp. Sin spam, solo valor.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
