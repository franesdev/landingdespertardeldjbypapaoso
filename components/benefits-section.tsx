import { Headphones, Music, Sliders, Award, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: Headphones,
    title: "Aprende de un Pro",
    description: "Papa Oso te enseña las técnicas que usan los DJs profesionales en los mejores clubs.",
  },
  {
    icon: Music,
    title: "Empatar a Oído",
    description: "Domina el secreto del ritmo. Olvídate del botón SYNC y mezcla como los grandes.",
  },
  {
    icon: Sliders,
    title: "Ecualización Pro",
    description: "Aprende a usar los bajos y la EQ para que tu música nunca choque.",
  },
  {
    icon: Zap,
    title: "Efectos y Stems",
    description: "Lo más moderno: mezcla voces de una canción con el ritmo de otra.",
  },
  {
    icon: Users,
    title: "Grupo VIP WhatsApp",
    description: "Únete a la comunidad exclusiva donde recibirás los enlaces de las clases.",
  },
  {
    icon: Award,
    title: "Certificación",
    description: "Al completar el curso completo, obtienes el certificado oficial de Papa Oso.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 px-6 md:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">Por qué inscribirte</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">QUÉ VAS A APRENDER</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            En solo 5 días vas a tener las bases para empezar a mezclar como profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
