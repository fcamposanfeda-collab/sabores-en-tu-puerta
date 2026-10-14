const parts = ["Primer plato", "Segundo plato", "Pan", "Postre"];

export function MealComposition() {
  return (
    <section aria-labelledby="composicion-title">
      <h2 id="composicion-title" className="font-serif text-4xl text-green-deep">
        Qué lleva cada comida
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-soft">
        La comida se compone de primer plato, segundo plato, pan y postre. Esos cuatro elementos van siempre en el menú basal. La nutricionista adapta el contenido a tu caso; tú no organizas las partes.
      </p>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {parts.map((part, index) => (
          <li key={part} className="rounded-3xl border border-line bg-paper p-5">
            <p className="text-sm text-leaf">0{index + 1}</p>
            <h3 className="mt-1 font-serif text-2xl text-green-deep">{part}</h3>
          </li>
        ))}
      </ol>
    </section>
  );
}
