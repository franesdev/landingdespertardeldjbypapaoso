import { Headphones, Music2, Users, Award, Mic2, Radio } from "lucide-react"

const features = [
  {
    icon: Headphones,
    title: "Técnicas de Mezcla",
    description: "Aprende beatmatching, EQ, efectos y transiciones profesionales.",
  },
  {
    icon: Music2,
    title: "Producción Musical",
    description: "Crea tus propios tracks y remixes con software profesional.",
  },
  {
    icon: Users,
    title: "Clases Personalizadas",
    description: "Grupos reducidos para atención personalizada.",
  },
  {
    icon: Award,
    title: "Certificación",
    description: "Obtén tu certificado al completar el programa.",
  },
  {
    icon: Mic2,
    title: "Equipo Profesional",
    description: "Practica con equipo Pioneer, Technics y más.",
  },
  {
    icon: Radio,
    title: "Shows en Vivo",
    description: "Oportunidades de tocar en eventos reales.",
  },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿QUÉ VAS A <span className="text-primary">APRENDER</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro programa completo te llevará de principiante a DJ profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <feature.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
