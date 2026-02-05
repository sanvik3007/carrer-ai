 import React, { createContext, useContext, useState, ReactNode } from 'react';
 import { UserProfile } from '@/lib/mockData';
 
 interface UserContextType {
   user: UserProfile | null;
   setUser: (user: UserProfile | null) => void;
   isAuthenticated: boolean;
   login: (email: string, phone: string) => void;
   logout: () => void;
 }
 
 const UserContext = createContext<UserContextType | undefined>(undefined);
 
 export function UserProvider({ children }: { children: ReactNode }) {
   const [user, setUser] = useState<UserProfile | null>(null);
 
   const isAuthenticated = user !== null;
 
   const login = (email: string, phone: string) => {
     setUser({
       id: crypto.randomUUID(),
       name: '',
       email,
       phone,
       department: '',
       institution: '',
       year: '',
       skills: [],
       interests: [],
     });
   };
 
   const logout = () => {
     setUser(null);
   };
 
   return (
     <UserContext.Provider value={{ user, setUser, isAuthenticated, login, logout }}>
       {children}
     </UserContext.Provider>
   );
 }
 
 export function useUser() {
   const context = useContext(UserContext);
   if (context === undefined) {
     throw new Error('useUser must be used within a UserProvider');
   }
   return context;
 }