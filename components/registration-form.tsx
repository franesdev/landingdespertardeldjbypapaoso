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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="registro" className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-background border border-primary/50 p-12 rounded-2xl">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-display text-4xl text-foreground mb-4">¡ESTÁS DENTRO!</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Te hemos enviado un mensaje con el enlace al grupo VIP de WhatsApp. Revisa tu teléfono.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Revisa tu WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registro" className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">Cupos limitados</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">INSCRÍBETE GRATIS</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Déjanos tus datos y te enviaremos el enlace al grupo VIP de WhatsApp donde recibirás las clases
          </p>
        </div>

        <div className="bg-background border border-border p-8 md:p-12 rounded-2xl max-w-xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-foreground font-semibold">100% Gratis - Sin tarjeta de crédito</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-foreground font-medium">
                Tu nombre
              </Label>
              <Input
                id="nombre"
                placeholder="¿Cómo te llamas?"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Tu email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground font-medium">
                Tu WhatsApp
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="+52 123 456 7890"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary h-12 rounded-lg"
              />
              <p className="text-xs text-muted-foreground">Te enviaremos el enlace del grupo VIP por aquí</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-bold rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? "Registrando..." : "QUIERO MI LUGAR GRATIS"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Al registrarte entrarás al grupo VIP de WhatsApp. Sin spam, solo valor.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
