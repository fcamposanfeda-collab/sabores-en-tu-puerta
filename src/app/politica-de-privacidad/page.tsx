import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Política de privacidad",
  description: "Política de privacidad del formulario de presupuesto de Sabores en tu Puerta. Datos usados solo para responder.",
  path: "/politica-de-privacidad",
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Política de privacidad" path="/politica-de-privacidad">
      <p>
        Responsable del tratamiento: {site.legalName}. CIF: {site.cif}. Domicilio: {site.address.streetAddress}. Contacto: {site.email} y {site.phoneDisplay}. TODO: completar razón social, CIF y domicilio antes del lanzamiento.
      </p>
      <h2>Qué datos recogemos</h2>
      <p>
        Si envías el formulario, tratamos nombre, teléfono, email, tipo de servicio, localidad, número aproximado de comensales, fecha si la indicas y el mensaje. Si escribes por WhatsApp, teléfono o email, tratamos los datos que nos facilites en esa conversación.
      </p>
      <h2>Para qué</h2>
      <p>
        La finalidad es responder a la solicitud de información o presupuesto y, si sigue adelante, preparar el servicio. La base es tu solicitud (medidas precontractuales) y, en su caso, la relación que se acuerde. No usamos estos datos para una lista comercial automática.
      </p>
      <h2>Cuánto tiempo</h2>
      <p>
        TODO: fijar el plazo de conservación (por ejemplo, el tiempo necesario para gestionar la solicitud y los plazos legales si llega a haber un encargo). Hasta entonces, no se debe afirmar un plazo concreto.
      </p>
      <h2>Destinatarios</h2>
      <p>
        Los datos del formulario se envían por correo electrónico mediante el servicio Web3Forms, que actúa como encargado del tratamiento. TODO: firmar el contrato de encargado e indicar la ubicación del tratamiento.
      </p>
      <h2>Derechos</h2>
      <p>
        Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {site.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).
      </p>
    </LegalLayout>
  );
}
