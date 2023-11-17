type ContainerProps = {
    styles: React.CSSProperties,
}
export default function Styles(props: ContainerProps) {
  return (
    <div style={props.styles}>Styles</div>
  )
}


// Give specific/custom style props to component:
/* <Button borderRadius={{
  topLeft: 5,
  ropright: 5,
  bottomRight: 10,
  bottomLeft: 10,
}} /> */

type RecordButtonProps = {
  // basically we specify key value pairs' types of our props ('topLeft': 5)
  borderRadius: Record<string, number>, 
}
export const RecordButton = ({borderRadius}: RecordButtonProps) => {
  return <button></button>
}
