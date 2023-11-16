//When we cannot export the type/props, which would happen for a 3rd party library component

import { Greet } from "../Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.isLoggedIn}
    </div>
  )
}
