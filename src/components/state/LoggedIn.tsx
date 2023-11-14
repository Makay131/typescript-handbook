import { useState } from "react"

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false) //no need to write additional TS, since it infers simple values.

    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
