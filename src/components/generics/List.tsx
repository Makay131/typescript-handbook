/* GENERICS */
/* DOWN BELOW IS ONLY FOR STRING BUT WHAT IF OUR LIST COULD HAVE NUMBERS OR OBJECTS */
// type ListProps = {
//     items: string[],
//     onClick: (value: string) => void
// }
type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item, index) => {
            return (
                <div key={index} onClick={() => onClick(item)}>
                    {JSON.stringify(item)}
                </div>
            )
        })}
    </div>
  )
}
