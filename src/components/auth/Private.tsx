import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean,
    //component: React.ComponentType ---> if the component does not have props
    component: React.ComponentType<ProfileProps> // --> if the component  has its own props
}

export default function Private({isLoggedIn, component: Component}: PrivateProps) {
    if(isLoggedIn) return <Component name="Marko" />
    else return <Login />
}
