import Image from "next/image";
import { publicImage } from "@/lib/images";

export function PhotoFrame({
  src,
  alt,
  className = "",
  priority = false,
  todo,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  todo: string;
}) {
  const ready = publicImage(src);
  return (
    <div className={`relative overflow-hidden bg-cream-deep ${className}`}>
      {ready ? (
        <Image
          src={ready}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 28vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full min-h-40 flex-col items-center justify-center gap-2 p-4 text-center">
          <img src="/logo-oscuro.png" alt="" width={72} height={72} className="h-16 w-auto opacity-90" />
          <p className="font-serif text-lg text-green-deep">{alt}</p>
          <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">TODO: {todo}</p>
        </div>
      )}
    </div>
  );
}
