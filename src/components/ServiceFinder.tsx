"use client";

import Link from "next/link";
import { useState } from "react";

type Option = { label: string; service?: string };

type Step = { key: "para" | "personas" | "dias" | "localidad"; question: string; options: Option[] };

const steps: Step[] = [
  {
    key: "para",
    question: "¿Para quién es la comida?",
    options: [
      { label: "Para casa: yo o mi familia", service: "Comida a domicilio" },
      { label: "Para una persona mayor", service: "Comida a domicilio" },
      { label: "Colegio o guardería", service: "Reparto a colectividades" },
      { label: "Residencia o centro de mayores", service: "Reparto a colectividades" },
      { label: "Empresa u oficina", service: "Catering en tu empresa y eventos" },
      { label: "Celebración o evento", service: "Catering personalizado para eventos" },
      { label: "Montería o evento de caza", service: "Catering para monterías y caza" },
    ],
  },
  {
    key: "personas",
    question: "¿Cuántas personas comen?",
    options: [{ label: "1 o 2" }, { label: "De 3 a 6" }, { label: "De 7 a 20" }, { label: "Más de 20" }],
  },
  {
    key: "dias",
    question: "¿Qué días lo necesitas?",
    options: [
      { label: "De lunes a viernes" },
      { label: "Algunos días de la semana" },
      { label: "Fines de semana" },
      { label: "Un día concreto" },
    ],
  },
];

export function ServiceFinder({ localities }: { localities: string[] }) {
  const [answers, setAnswers] = useState<Partial<Record<Step["key"], Option>>>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [localidad, setLocalidad] = useState("");

  const total = steps.length + 1;
  const done = stepIndex >= total;
  const step = steps[stepIndex];

  function choose(option: Option) {
    setAnswers((current) => ({ ...current, [step.key]: option }));
    setStepIndex((index) => index + 1);
  }

  function restart() {
    setAnswers({});
    setLocalidad("");
    setStepIndex(0);
  }

  const servicio = answers.para?.service ?? "Todavía no lo tengo claro";
  const mensaje = [
    `Para quién: ${answers.para?.label ?? "-"}.`,
    `Personas: ${answers.personas?.label ?? "-"}.`,
    `Días: ${answers.dias?.label ?? "-"}.`,
  ].join(" ");
  const query = new URLSearchParams({ servicio, localidad, mensaje }).toString();

  const option =
    "flex min-h-12 w-full items-center rounded-2xl border border-line bg-cream px-4 py-3 text-left text-sm text-ink transition hover:border-green hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

  return (
    <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
          {done ? "Listo" : `Paso ${stepIndex + 1} de ${total}`}
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {Array.from({ length: total }, (_, index) => (
            <span
              key={index}
              className={`h-1.5 w-8 rounded-full ${index < stepIndex || done ? "bg-green-dark" : index === stepIndex ? "bg-leaf" : "bg-line"}`}
            />
          ))}
        </div>
      </div>

      <div aria-live="polite">
        {step ? (
          <fieldset className="mt-5">
            <legend className="font-serif text-2xl text-green-deep sm:text-3xl">{step.question}</legend>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {step.options.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => choose(item)}
                    aria-pressed={answers[step.key]?.label === item.label}
                    className={option}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </fieldset>
        ) : !done ? (
          <form
            className="mt-5"
            onSubmit={(event) => {
              event.preventDefault();
              if (localidad) setStepIndex(total);
            }}
          >
            <label htmlFor="finder-localidad" className="font-serif text-2xl text-green-deep sm:text-3xl">
              ¿Dónde hay que llevarla?
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <select
                id="finder-localidad"
                value={localidad}
                onChange={(event) => setLocalidad(event.target.value)}
                className="min-h-12 flex-1 rounded-2xl border border-line bg-cream px-4 text-sm"
              >
                <option value="">Elige localidad</option>
                {localities.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
                <option value="Otra dentro de la zona">Otra dentro de la zona</option>
              </select>
              <button
                type="submit"
                disabled={!localidad}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-dark px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white disabled:opacity-50"
              >
                Continuar
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-5">
            <p className="font-serif text-2xl text-green-deep sm:text-3xl">Te encaja: {servicio}</p>
            <ul className="mt-4 grid gap-1 text-sm text-ink-soft">
              <li>Para quién: {answers.para?.label}</li>
              <li>Personas: {answers.personas?.label}</li>
              <li>Días: {answers.dias?.label}</li>
              <li>Localidad: {localidad}</li>
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Te llevamos al formulario con estos datos ya puestos. Solo faltan tu nombre y cómo contactarte.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contacto/?${query}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-dark px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white"
              >
                Pedir presupuesto <span aria-hidden="true">&nbsp;→</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {stepIndex > 0 ? (
        <div className="mt-6 flex gap-4 text-sm">
          {!done ? (
            <button type="button" onClick={() => setStepIndex((index) => index - 1)} className="text-green-dark underline">
              Atrás
            </button>
          ) : null}
          <button type="button" onClick={restart} className="text-green-dark underline">
            Empezar de nuevo
          </button>
        </div>
      ) : null}
    </div>
  );
}
