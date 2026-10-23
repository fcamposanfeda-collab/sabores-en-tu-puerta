"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { enabledLocalities } from "@/data/localities";
import { services } from "@/data/services";
import { contactSchema, fieldErrors } from "@/lib/contact";
import { track } from "@/lib/track";

const initial = {
  nombre: "",
  telefono: "",
  email: "",
  servicio: "",
  localidad: "",
  comensales: "",
  fecha: "",
  mensaje: "",
  rgpd: false,
  company: "",
};

export function ContactForm() {
  const params = useSearchParams();
  const router = useRouter();
  const [values, setValues] = useState({
    ...initial,
    servicio: params.get("servicio") ?? "",
    localidad: params.get("localidad") ?? "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [formError, setFormError] = useState("");

  function update(name: string, value: string | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      return;
    }
    setErrors({});
    setStatus("sending");
    if (parsed.data.company) {
      router.push("/contacto/gracias");
      return;
    }
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setFormError(
        "El envío por email todavía no está configurado. Llámanos o escríbenos por WhatsApp y te atendemos igual.",
      );
      return;
    }
    const { nombre, telefono, email, servicio, localidad, comensales, fecha, mensaje } = parsed.data;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Presupuesto: ${servicio} en ${localidad}`,
          from_name: "Web Sabores en tu Puerta",
          replyto: email,
          Nombre: nombre,
          Teléfono: telefono,
          Email: email,
          Servicio: servicio,
          Localidad: localidad,
          Comensales: comensales,
          Fecha: fecha || "No indicada",
          Mensaje: mensaje,
        }),
      });
      if (!response.ok) {
        setStatus("error");
        setFormError("No se ha podido enviar. Prueba por teléfono o WhatsApp.");
        return;
      }
      track("generate_lead", { servicio: parsed.data.servicio });
      router.push("/contacto/gracias");
    } catch {
      setStatus("error");
      setFormError("No se ha podido enviar. Prueba por teléfono o WhatsApp.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>
      <Field label="Nombre" name="nombre" error={errors.nombre}>
        <input
          id="nombre"
          name="nombre"
          autoComplete="name"
          value={values.nombre}
          onChange={(event) => update("nombre", event.target.value)}
          className={inputClass}
          required
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Teléfono" name="telefono" error={errors.telefono}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            value={values.telefono}
            onChange={(event) => update("telefono", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Tipo de servicio" name="servicio" error={errors.servicio}>
          <select
            id="servicio"
            name="servicio"
            value={values.servicio}
            onChange={(event) => update("servicio", event.target.value)}
            className={inputClass}
            required
          >
            <option value="">Elige un servicio</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Todavía no lo tengo claro">Todavía no lo tengo claro</option>
          </select>
        </Field>
        <Field label="Localidad" name="localidad" error={errors.localidad}>
          <select
            id="localidad"
            name="localidad"
            value={values.localidad}
            onChange={(event) => update("localidad", event.target.value)}
            className={inputClass}
            required
          >
            <option value="">Elige localidad</option>
            {enabledLocalities.map((locality) => (
              <option key={locality.slug} value={locality.name}>
                {locality.name}
              </option>
            ))}
            <option value="Otra dentro de la zona">Otra dentro de la zona</option>
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="N.º aproximado de comensales" name="comensales" error={errors.comensales}>
          <input
            id="comensales"
            name="comensales"
            inputMode="text"
            value={values.comensales}
            onChange={(event) => update("comensales", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
        <Field label="Fecha" name="fecha" error={errors.fecha} optional>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={values.fecha}
            onChange={(event) => update("fecha", event.target.value)}
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Mensaje" name="mensaje" error={errors.mensaje}>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={values.mensaje}
          onChange={(event) => update("mensaje", event.target.value)}
          className={inputClass}
          required
        />
      </Field>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            name="rgpd"
            checked={values.rgpd}
            onChange={(event) => update("rgpd", event.target.checked)}
            className="mt-1"
            required
          />
          <span>
            He leído y acepto la{" "}
            <a className="underline" href="/politica-de-privacidad">
              política de privacidad
            </a>{" "}
            y el uso de mis datos para responder a esta solicitud.
          </span>
        </label>
        {errors.rgpd ? (
          <p id="rgpd-error" className="mt-1 text-sm text-green-deep">
            {errors.rgpd}
          </p>
        ) : null}
      </div>
      {formError ? (
        <p role="alert" className="text-sm text-green-deep">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-dark px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Solicitar presupuesto"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none";

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-ink">
        {label}
        {optional ? <span className="font-normal text-ink-soft"> (opcional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-sm text-green-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
