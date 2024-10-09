export interface RodapeProps {
  className?: string
}

export default function Rodape(props: RodapeProps) {
  return (
    <footer className={`${props.className ?? ''}`}>
      <div className="flex justify-between items-center boxed">
        Todos os direitos reservados &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}