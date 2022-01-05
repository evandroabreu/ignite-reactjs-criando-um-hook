import { Container, Content } from "./styles";

import SigninButton from "../SigninButton";

import ActiveLink from "../ActiveLink";

import { MdOutlineLiveTv, MdSportsSoccer, MdQueryStats, MdDescription } from 'react-icons/md'

const Header = () => {
  
  return (
      <Container>
        <Content>
          <hgroup>
            <h1>HikeBets</h1>
            <p>Apostas esportivas</p>
          </hgroup>          
          <nav>
              <ActiveLink activeClassName="active" to="/">
                  <><MdSportsSoccer/>Futebol</>
              </ActiveLink>
              <ActiveLink activeClassName="active" to="/aovivo">
                  <><MdOutlineLiveTv/>Ao vivo</>
              </ActiveLink>
              <ActiveLink activeClassName="active" to="/regulamento">
                  <><MdDescription/>Regulamento</>
              </ActiveLink>
              <ActiveLink activeClassName="active" to="/consulta">
                  <><MdQueryStats/>Consultar Aposta</>
              </ActiveLink>                                                                              
          </nav>

          <SigninButton/>          
        </Content>
      </Container>
  )
}

export default Header;