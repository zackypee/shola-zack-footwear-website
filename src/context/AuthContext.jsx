import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(undefined)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try { return JSON.parse(localStorage.getItem('users_v1') || '[]') } catch { return [] }
  })
  const [currentUser, setCurrentUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('current_user_v1') || 'null') } catch { return null }
  })

  useEffect(() => { localStorage.setItem('users_v1', JSON.stringify(users)) }, [users])
  useEffect(() => { localStorage.setItem('current_user_v1', JSON.stringify(currentUser)) }, [currentUser])

  const register = ({ name, email, password }) => {
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (exists) throw new Error('Email already registered')
    const user = { id: String(Date.now()), name, email, password }
    setUsers(prev => [...prev, user])
    setCurrentUser({ id: user.id, name: user.name, email: user.email })
  }

  const login = ({ email, password }) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
    if (!user) throw new Error('Invalid credentials')
    setCurrentUser({ id: user.id, name: user.name, email: user.email })
  }

  const logout = () => setCurrentUser(null)

  const value = useMemo(() => ({ users, currentUser, register, login, logout }), [users, currentUser])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext


