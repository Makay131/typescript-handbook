type ReactChildrenProps = {
    children: React.ReactNode,
}
export default function ReactChildren(props: ReactChildrenProps) {
  return (
    <div>{props.children}</div>
  )
}
