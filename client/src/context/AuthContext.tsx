import React, {createContext, useContext, useEffect, useState} from "react";
import jwtDecode from 'jwt-decode'
import type {User} from "../interface/user";

type AuthContextProps = {
    user: User | null
    logout: () => void
    login: ({username, password}: { username: string, password: string }) => Promise<AuthContextProps['user']>
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => {
        return null
    },
    logout: () => {
    }
})

const COOKIE_NAME = "mewo_twitter_auth"

export const useAuth = () => {
    return useContext(AuthContext);
}

const login = async ({
                         password,
                         username
                     }: { password: string, username: string }): Promise<AuthContextProps['user']> => {
    const response = {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJ0ZXN0IiwidXNlcm5hbWUiOiJ0ZXN0IiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL2Nsb3VkZmxhcmUtaXBmcy5jb20vaXBmcy9RbWQzVzVEdWhnSGlyTEhHVml4aTZWNzZMaENrWlV6NnBuRnQ1QUpCaXl2SHllL2F2YXRhci8xMTQ4LmpwZyJ9LCJpYXQiOjE2NzM4NzgyODV9.qanIAgPv4BTNedHUKMfZT2L6bslcvgVGCSncQ8HnoHE"
    }

    const user = parseToken(response.token)
    if (user) {
        window.sessionStorage.setItem(COOKIE_NAME, response.token)
    }

    return user
}

const logout = () => {
    window.sessionStorage.removeItem(COOKIE_NAME)
}

const parseToken = (token: string): AuthContextProps['user'] => {
    const parsed = jwtDecode<Pick<AuthContextProps, 'user'>>(token)
    if (parsed.user) {
        return parsed.user
    }
    return null
}

export const AuthContextProvider: React.FC<{ children: React.ReactElement }> = ({children}) => {

    const [user, setUser] = useState<AuthContextProps['user']>(null)

    useEffect(() => {
        const token = window.sessionStorage.getItem(COOKIE_NAME)
        if (token) {
            const user = parseToken(token)
            setUser(user)
        }
    }, [])

    const handleLogin = async ({username, password}: { username: string, password: string }) => {
        const user = await login({username, password})
        setUser(user)
        return user
    }

    const handleLogout = () => {
        logout()
        setUser(null)
    }


    return (
        <AuthContext.Provider
            value={{
                user: user,
                logout: handleLogout,
                login: handleLogin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
