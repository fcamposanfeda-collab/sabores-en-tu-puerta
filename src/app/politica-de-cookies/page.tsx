import { LegalLayout } from "@/components/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Política de cookies",
  description: "Política de cookies de Sabores en tu Puerta. La medición con Google Analytics solo se carga si la aceptas.",
  path: "/politica-de-cookies",
});

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de cookies" path="/politica-de-cookies">
      <p>
        Esta web se puede usar sin aceptar cookies de medición. Tu elección (aceptar o rechazar) se guarda en el almacenamiento local del navegador, no en una cookie. Puedes cambiarla en el enlace «Configurar cookies» del pie.
      </p>
      <h2>Si aceptas la medición</h2>
      <p>
        Se carga Google Analytics 4, solo si existe un identificador en la configuración del sitio y has aceptado. Analytics usa cookies para distinguir visitas y medir clics en llamada, WhatsApp y envío del formulario. TODO: anotar el nombre exacto de las cookies de la propiedad de GA4 cuando el ID esté creado.
      </p>
      <h2>Si rechazas</h2>
      <p>
        No se inserta el script de Analytics. Llamar, escribir por WhatsApp y enviar el formulario siguen funcionando. Esas acciones no se registran en Analytics.
      </p>
      <h2>Cómo retirar el consentimiento</h2>
      <p>
        Vuelve a abrir la configuración de cookies y pulsa Rechazar. También puedes borrar los datos del sitio en tu navegador.
      </p>
    </LegalLayout>
  );
}
