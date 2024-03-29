import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function ProductCard({ title, description, image, url }: ProductCardProps) {
  return (
    <Link href={url}>
      <div className="flex flex-row gap-4">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="leading-7">{description}</p>
        </div>
      </div>
    </Link>
  )
}