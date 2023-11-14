type InputProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Input({value, onChange}: InputProps) {
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//         console.log(e)
//     }
//   return (
//     <input type="text" value={props.value} onChange={handleChange} />
//   )
  return (
    <input type="text" value={value} onChange={onChange} />
  )
}
