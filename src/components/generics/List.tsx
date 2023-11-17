/* GENERICS */

/*
NOTE
    const convertToArray = <T,>(value: T): T[] => {
        return [value];
    };
    //above we use <T,> becuase tsx --> jsx will be considered as <T /> if we dont type comma after T
    function convertToArray<T>(value: T): T[] {
        return [value];
    };
*/

/* DOWN BELOW IS ONLY FOR STRING BUT WHAT IF OUR LIST COULD HAVE NUMBERS OR OBJECTS */
// type ListProps = {
//     items: string[],
//     onClick: (value: string) => void
// }
type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}
// --> If you want anything as the type then constraint will look like --> T extends {}
// --> If you want an object with id has to be passed in, then ---> T extends { id: number } 
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
