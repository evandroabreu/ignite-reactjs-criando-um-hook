import { Container, Leagues, LeagueList, DateLinks } from "./styles";
import  { Link } from 'react-router-dom';
import { useBet } from '../../hooks/useBet';

const EventsLinks = () => {
  const { today, tomorrow, afterTomorrow, upcomingEvents, setDateLink, setLeagueLink } = useBet();
  return (
      <Container>
        <DateLinks>
            <header>
                <p>Frequentemente acessados</p>
            </header>
            <ul>
                <li>
                  <Link to="#" onClick={()=>setDateLink('today')} >                                                 
                      {`Jogos de hoje (${today})`}
                  </Link>
                </li>
                <li>                      
                  <Link to="#" onClick={()=>setDateLink('tomorrow')}>                                                 
                      {`Jogos de amanhã (${tomorrow})`}
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={()=>setDateLink('aftertomorrow')}>                                                
                      {`Jogos do dia (${afterTomorrow})`}
                  </Link>                      
                </li>
            </ul>                
        </DateLinks>
        <Leagues>
            <header>
                <p>Campeonatos</p>
            </header>
            <LeagueList>
              <ul>
                {upcomingEvents && upcomingEvents.map(event =>{
                      return (
                      <li key={event.league_id}>                                             
                        <Link to="#" onClick={() => setLeagueLink(event.league_id)} >                                                
                              { event.league_name}
                        </Link>                      
                      </li>
                      )
                  })}                                
              </ul>
            </LeagueList>
            <footer></footer>
        </Leagues>
      </Container>
  )
}

export default EventsLinks;