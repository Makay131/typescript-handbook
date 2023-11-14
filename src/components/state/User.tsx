/* WHEN WE DONT KNOW WHAT THE FUTURE VALUE IS- FOR FUTURE VALUE- DATA */

import { useState } from "react";

type AuthUser = {
    name: string,
    email: string,
}

export default function User() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: 'Marko',
            email: 'a@b.com',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>Username is {user?.name}</div>
        <div>User email is {user?.email}</div>
    </div>
  )
}
