type BaseButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> //we made the children to be STRING ONLY 
export default function BaseButton({ variant, children, ...rest }: BaseButtonProps) {
  return (
    <button className={`${variant}`} {...rest}>{children}</button>
  )
}
