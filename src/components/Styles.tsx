type ContainerProps = {
    styles: React.CSSProperties,
}
export default function Styles(props: ContainerProps) {
  return (
    <div style={props.styles}>Styles</div>
  )
}
