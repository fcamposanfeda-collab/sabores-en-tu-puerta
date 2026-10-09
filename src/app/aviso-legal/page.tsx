import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Aviso legal",
  description: "Aviso legal de Sabores en tu Puerta. Identificación del titular pendiente de confirmar razón social, CIF y domicilio.",
  path: "/aviso-legal",
});

export default function LegalNoticePage() {
  return (
    <LegalLayout title="Aviso legal" path="/aviso-legal">
      <p>
        Este sitio informa sobre los servicios de {site.name}. Los datos de identificación que exige la LSSI se completarán antes de publicar el sitio con el dominio definitivo.
      </p>
      <ul>
        <li>Razón social: {site.legalName}</li>
        <li>CIF: {site.cif}</li>
        <li>Domicilio: {site.address.streetAddress}, {site.address.postalCode} {site.address.addressLocality}</li>
        <li>Email: {site.email}</li>
        <li>Teléfono: {site.phoneDisplay}</li>
      </ul>
      <p>
        Los textos describen servicios de comida casera, colectividades y catering en la zona indicada. No constituyen una oferta con precio. El presupuesto se envía de forma individual.
      </p>
      <p>
        Los contenidos de esta web (textos, logotipo recreado y estructura) pertenecen a su titular. TODO: sustituir el emblema por el archivo SVG oficial si se dispone de él.
      </p>
    </LegalLayout>
  );
}
