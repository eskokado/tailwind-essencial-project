import { IconBrandTailwind } from "@tabler/icons-react";
import Link from "next/link";

export interface LogoProps {
  className?: string
}

export default function Logo(props: LogoProps) {
  return (
    <Link href="/" className={`${props.className ?? ''}`}>
      <IconBrandTailwind size={30} stroke={1} />
      <div>
        <span className="font-black">Tailwind </span>
        <span>Essencial</span>
      </div>
    </Link>
  )
}