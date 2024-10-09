import Logo from "./Logo"
import { MenuUsuario } from "./MenuUsuario"

export interface CabecalhoProps {
  className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <header className={`${props.className ?? ''}`}>
      <div className="flex justify-between items-center boxed">
        <Logo className="flex gap-2 items-center" />
        <MenuUsuario />
      </div>
    </header>
  )
}