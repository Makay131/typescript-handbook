type BaseInputProps = React.ComponentProps<'input'>
export default function BaseInput(props: BaseInputProps) {
  return (
    <input {...props} />
  )
}
