import { z } from "zod";
import { services } from "@/data/services";

export const serviceOptions = services.map((service) => service.name);

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre.").max(80),
  telefono: z
    .string()
    .trim()
    .min(9, "Escribe un teléfono válido.")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "El teléfono solo puede tener números y espacios."),
  email: z
    .string()
    .trim()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Escribe un email válido."),
  servicio: z.string().trim().min(1, "Elige un tipo de servicio."),
  localidad: z.string().trim().min(1, "Indica la localidad."),
  comensales: z
    .string()
    .trim()
    .min(1, "Indica un número aproximado de comensales.")
    .max(40),
  fecha: z.string().trim().max(40).optional().or(z.literal("")),
  mensaje: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más, al menos una frase.")
    .max(2000),
  rgpd: z.boolean().refine((value) => value, {
    message: "Debes aceptar la política de privacidad.",
  }),
  company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function fieldErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}
