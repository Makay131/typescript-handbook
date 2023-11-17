/* OMIT
type Admin = {
  //all properties,
  superpowers: true
}

type User = Omit<Admin, 'superpowers'>

*/
type BaseButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> //we made the children to be STRING ONLY, by extracting/omitting the children property from React.ComponentProps<'button'>

// --> also use React.ComponentPropsWithoutRef or React.ComponentPropsWithRef depending on if you have ref as a prop or not to be more specific
export default function BaseButton({ variant, children, ...rest }: BaseButtonProps) {
  return (
    <button className={`${variant}`} {...rest}>{children}</button>
  )
}
