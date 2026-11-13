import { LegalLayout } from "@/components/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Política de cookies",
  description: "Política de cookies de Sabores en tu Puerta. Medimos las visitas con Umami, sin cookies.",
  path: "/politica-de-cookies",
});

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de cookies" path="/politica-de-cookies">
      <p>
        Esta web no instala cookies propias ni de terceros para funcionar ni para medir las visitas.
      </p>
      <h2>Estadísticas de visitas sin cookies</h2>
      <p>
        Para saber cuántas personas visitan la web y qué páginas consultan usamos Umami, una herramienta de analítica que no usa cookies ni guarda datos en tu navegador, y no almacena tu dirección IP. Los datos son agregados y no permiten identificarte, por lo que no se pide consentimiento para esta medición.
      </p>
      <h2>Google Analytics (solo si se activa)</h2>
      <p>
        Si en el futuro se activa Google Analytics, se mostrará un aviso para que aceptes o rechaces sus cookies, y tu elección se guardará en el almacenamiento local del navegador. Podrás cambiarla en el enlace «Configurar cookies» del pie.
      </p>
      <h3>Si aceptas la medición</h3>
      <p>
        Se carga Google Analytics 4, solo si existe un identificador en la configuración del sitio y has aceptado. Analytics usa cookies para distinguir visitas y medir clics en llamada, WhatsApp y envío del formulario. Las cookies de Google Analytics empiezan por «_ga» y duran hasta dos años.
      </p>
      <h3>Si rechazas</h3>
      <p>
        No se inserta el script de Analytics. Llamar, escribir por WhatsApp y enviar el formulario siguen funcionando. Esas acciones no se registran en Analytics.
      </p>
      <h3>Cómo retirar el consentimiento</h3>
      <p>
        Vuelve a abrir la configuración de cookies y pulsa Rechazar. También puedes borrar los datos del sitio en tu navegador.
      </p>
    </LegalLayout>
  );
}
