export type ProfileProps = {
    name: string,
}

export default function Profile({name}: ProfileProps) {
  return (
    <div>Private Profile component. Name is {name}</div>
  )
}
