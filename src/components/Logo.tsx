import Link from "next/link";

export function Logo({
  height = 72,
  light = false,
  className = "",
}: {
  height?: number;
  light?: boolean;
  className?: string;
}) {
  const src = light ? "/logo-blanco.png" : "/logo-oscuro.png";
  const width = light ? Math.round(height * (466 / 481)) : Math.round(height * (343 / 340));

  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`} aria-label="Sabores en tu Puerta, inicio">
      <img src={src} width={width} height={height} alt="" className="h-auto w-auto" style={{ height }} />
    </Link>
  );
}
