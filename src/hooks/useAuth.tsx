import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';
import { verify } from "jsonwebtoken";
import { IPayloadToken } from "../types";
import { toast } from 'react-toastify';
interface AuthState { 
    token: string;
    user: IPayloadToken; 
}

interface SignInCredentials{
    email: string;
    password: string;
}

interface AuthContextData {
    user: IPayloadToken;   
    token: string;  
    signIn(credentials:SignInCredentials): Promise<boolean>;   
    signOut(): void;   
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

    const [data, setData] = useState<AuthState>( () => {
        const token = localStorage.getItem('@HikeBets:token');
        const user = localStorage.getItem('@HikeBets:user');
        if(token && user){
            return { token: token, user: JSON.parse(user) }
        }
        return {} as AuthState;
    });
    
    const signIn = useCallback(async ({email, password, }) => {                
        try {

            const response = await api.post('/authenticate', {
                username: email, 
                password, 
            });
    
            const token = response.data;  
            
            const { id, userName, is_manager, is_money_changer, is_owner, bet_house_id, owner_id, is_super } = verify(token, "92836ccce9ccd243246cbc13d23e43f0") as IPayloadToken       
            
            const user:IPayloadToken = {
                id,
                userName: userName,
                email,
                is_manager: is_manager,
                is_money_changer: is_money_changer,
                is_owner: is_owner,
                bet_house_id: bet_house_id,
                owner_id: owner_id,
                is_super: is_super
            }        
        
            localStorage.setItem('@HikeBets:token', token);
            localStorage.setItem('@HikeBets:user', JSON.stringify(user));    
            setData({token, user})
            return true;
        } catch (err) {
            toast.error('Login ou senha inválidos');
            return false;
        }

    },[]);
    
    
    const signOut = useCallback(()=>{
        localStorage.removeItem('@HikeBets:token');
        localStorage.removeItem('@HikeBets:user');
        setData({} as AuthState);
    }, []);
    

    return (
        <AuthContext.Provider value={{signIn, signOut, token: data.token, user: data.user}}>
            {children}
        </AuthContext.Provider>
    );

}

function useAuth():AuthContextData{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;

}
export { AuthProvider, useAuth };
