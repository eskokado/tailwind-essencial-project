export interface MenuGrupoProps {
  label: string
  children?: React.ReactNode
  className?: string
}

export default function MenuGrupo(props: MenuGrupoProps) {
  return (
    <div className={` flex flex-col gap-2${props.className ?? ''}`}>
      <span className="text-orange-600 font-semibold">{props.label}</span>
      <div>{props.children}</div>
    </div>
  )
}