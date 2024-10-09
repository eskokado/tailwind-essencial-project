import Link from "next/link"

export interface MenuItemProps {
  label: string
  href: string
  className?: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link className={`flex py-1.5 hover:underline  ${props.className}`} href={props.href}>
      <span className="text-zinc-400 font-sm">{props.label}</span>
    </Link>
  )
}