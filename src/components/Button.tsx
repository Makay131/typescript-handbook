
// type ButtonProps = {
//     onClick: () => void,
// }
type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={(e) => props.onClick(e,1)}>Click</button>
  )
}
