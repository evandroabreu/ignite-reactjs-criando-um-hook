
import { FaSignInAlt } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { IPayloadToken } from '../../types';
import { Button } from "./styles";
import {  useAuth } from "../../hooks/useAuth";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const SigninButton = () => {
    const { user, signOut } = useAuth();
    
    const [isLogged, setIsLogged] = useState(false);

    const history = useHistory();
    
    const routeChange = () =>{ 
        console.log(isLogged);
        
        if(!isLogged) {            
            history.push(`/login`);    
        }else{
            history.push(`/`);    
            signOut();
            setIsLogged(false);        
            
        }
    }

    //const isLogged = false;
    if(user && !isLogged){
        setIsLogged(true);        
    }
    
    return isLogged ?  
    
    (
        <Button type="button" onClick={routeChange}>
           <FaSignInAlt color="#04d361" /> {user.userName} <FiX color="#737380" />
        </Button>
    )
    : 
    (
        <Button 
           type="button"
           onClick={routeChange}
        >
           <FaSignInAlt color="#eba417" /> Acessar
        </Button>
    );

}

export default SigninButton;