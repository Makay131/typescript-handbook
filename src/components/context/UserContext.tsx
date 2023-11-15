import { createContext, useContext, useState } from "react";

export type AuthUser = {
    name: string,
    email: string,
}

type UserProviderProps = {
    children: React.ReactNode,
}

type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{
            user, setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}


export function useUserContext() {
    const context = useContext(UserContext);
    if(context === undefined) throw new Error("ThemeContext is being used outside of its scope")
    return context;
}