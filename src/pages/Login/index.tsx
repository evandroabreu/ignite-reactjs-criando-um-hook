import { useContext, useState } from "react";
import { 
    Container,
    Content,    
    Form
} from './styles'
import { useHistory } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'

const Login = (): JSX.Element => {
    const history = useHistory();
    const { user, signIn } = useAuth();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');  
    
    const routeChange = async () =>{ 
        
        const loginSuccess = await signIn({email: userName, password});

        if(loginSuccess) history.push(`/`);    
    }    

    return (
        <Container>
            <Content>
                <Form>                    
                    <h3>Acessar área restrita</h3>		      		
		      			<input 
                          autoComplete="new-off" 
                          type="text" 
                          placeholder="Usuário" 
                          required
                          value={userName} 
                          onChange={event => setUserName(event.target.value)}
                          />
		      		                    
                        <input 
                        autoComplete="new-off" 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={event => setPassword(event.target.value)}
                        required/>
                                        
                        <button onClick={() => routeChange()} type="button">Acessar</button>                                    
	          </Form>            
              </Content>            
        </Container>
    );
}

export default Login;