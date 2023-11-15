import { useUserContext } from "./UserContext"

export default function User() {
    const userContext = useUserContext()
    const handleLogin = () => {
        if(userContext) userContext.setUser({
            name: 'Marko',
            email: 'a@b.com'
        })
    }
    const handleLogout = () => {
        if(userContext) userContext.setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name} </div>
            <div>User email is {userContext?.user?.email} </div>
        </div>
    )
}