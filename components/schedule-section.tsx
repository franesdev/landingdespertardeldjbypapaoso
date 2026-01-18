import { CheckCircle2 } from "lucide-react"

const schedule = [
  {
    day: "Día 1",
    title: "Teoría Pro",
    description: "Cómo configurar el equipo y Serato. Verás que no es difícil si se explica bien.",
    topics: ["Configuración del equipo", "Introducción a Serato", "Conexiones básicas"],
  },
  {
    day: "Día 2",
    title: "El Oído",
    description: "Técnica de empatar a oído. El secreto del ritmo que te hará sentir que ya estás aprendiendo.",
    topics: ["Beatmatching manual", "Entrenamiento auditivo", "Sincronización natural"],
  },
  {
    day: "Día 3",
    title: "La Mezcla",
    description: "Cómo usar la ecualización y los bajos para que la música nunca choque.",
    topics: ["Ecualización básica", "Manejo de bajos", "Transiciones suaves"],
  },
  {
    day: "Día 4",
    title: "Efectos y Stems",
    description: "Lo más moderno: mezcla voces de una canción con el ritmo de otra.",
    topics: ["Efectos creativos", "Stems y acapellas", "Técnicas avanzadas"],
  },
  {
    day: "Día 5",
    title: "La Gran Invitación",
    description: "Resumen de lo aprendido y oportunidad especial para continuar tu formación.",
    topics: ["Repaso general", "Sesión de práctica", "Siguiente paso profesional"],
  },
]

export function ScheduleSection() {
  return (
    <section id="programa" className="py-24 px-6 md:px-12 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">Programa completo</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mt-4">5 DÍAS QUE CAMBIARÁN TODO</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Cada día en vivo, con Papa Oso enseñándote paso a paso
          </p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-600 text-white font-display text-2xl px-6 py-3 rounded-lg text-center">
                    {item.day}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="h-4 w-4 text-red-600" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
