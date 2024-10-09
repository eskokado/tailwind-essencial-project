import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaPadding() {
  return (
    <Pagina>
      <Titulo texto="Padding" descricao="fdasfds  fdsadfasfs fdsafsdad afssafas fdasfsaf fasfdsa"/>
      <div className="bg-blue-500 p-7">Conteúdo</div>
    </Pagina>
  )
}