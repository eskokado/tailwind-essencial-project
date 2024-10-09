import { ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

interface PaginaProps {
  children?: ReactNode
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho className="flex items-center h-20 px-14 border-b border-zinc-800 justify-between"/>
      <div className="flex flex-1 boxed">
        <Menu className="hidden lg:block lg:w-64 xl:w-72 py-7"/>
        <main className="flex-1 p-7">{props.children}</main>
      </div>
      <Rodape className="flex items-center h-14 px-14 border-t border-zinc-800"/>
    </div>
   )
}