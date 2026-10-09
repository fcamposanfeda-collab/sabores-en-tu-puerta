import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, fieldErrors } from "@/lib/contact";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "El formulario no se ha podido leer." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Revisa los campos.", errors: fieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "Saboresentupuerta1@gmail.com";

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "El envío por email todavía no está configurado. Llámanos o escríbenos por WhatsApp y te atendemos igual.",
      },
      { status: 503 },
    );
  }

  const { nombre, telefono, email, servicio, localidad, comensales, fecha, mensaje } = parsed.data;
  const text = [
    "Nueva solicitud de presupuesto desde la web",
    "",
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Email: ${email}`,
    `Servicio: ${servicio}`,
    `Localidad: ${localidad}`,
    `Comensales: ${comensales}`,
    `Fecha: ${fecha || "No indicada"}`,
    "",
    mensaje,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Presupuesto: ${servicio} en ${localidad}`,
      text,
    });
    if (result.error) {
      console.error(result.error);
      return NextResponse.json(
        { ok: false, message: "No se ha podido enviar el correo. Prueba por teléfono o WhatsApp." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "No se ha podido enviar el correo. Prueba por teléfono o WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
