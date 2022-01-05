import React, { useEffect, useState } from 'react';

import { Main, 
  Container, 
  League, 
  OddMarket, 
  OddMarketTitles, 
  MatcheContainer, 
  MatcheDate, 
  MatcheOpponents, 
  MatcheOdds, 
  Odds, 
  Odd,  
  ContainerTicket,
  ResumeContainer,
  BetStakeBox,
  BetStakeLabel,
  BetStakeValueWraper,
  BetStakeUnit,
  BetStakeValue,
  BetReturn,
  BetReturnStakeLabel,
  BetReturnStakeValueWraper,
  BetReturnStakeUnit,
  BetReturnStakeValue,
  BetItems,
  BetItem,
  BetItemEvent,
  BetItemMarket,
  BetItemOdd,
  RemoveItem,
  FinalizeButton,
  BetClient
} from './styles';
import { toast } from 'react-toastify';

import { useBet } from '../../hooks/useBet';
import EventsLinks from '../../components/EventsLinks';
import { IBetItem, IResultPostBet } from '../../types';
import { api } from '../../services/api';
import Modal from 'react-modal';
import { useAuth } from '../../hooks/useAuth';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = (): JSX.Element => {

  const { user, token } = useAuth();
  const { today, matcheAmount, upcomingEvents } = useBet();
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [betItems, setBetItems] = useState<IBetItem[]>([]); 
  const [betAmount, setBetAmount] = useState('0'); 
  const [betReturn, setBetReturn] = useState(''); 
  const [clientName, setClientName] = useState(''); 
  const [betTicketNumber, setBetTicketNumber] = useState(0); 
  const showFinalizeButtom = (betItems.length > 0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal() {
    setIsOpen(false);
  }  
  
  async function finalizeTicket(){
    if(parseInt(betAmount) < 5){
      toast.error(`O valor da aposta deve ser no mínimo R$ 5,00`);
      return;
    }

    if(clientName.trim()===''){
      toast.error(`Informe o nome do apostador`);
      return;
    }

    if(betItems.length < 1){
      toast.error(`Aposta vazia`);
      return;
    }

    console.log(user.bet_house_id);
    
    const response = await api.post<IResultPostBet>('/bets/create', {
      bet_amount: betAmount, 
      bet_client_id: null, 
      bet_house_id: user?.bet_house_id, 
      user_id: user?.id, 
      bet_items: JSON.stringify(betItems), 
      client_name: user ? clientName : null, 
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      }  
    }
    );

    const result = response.data;
    
    if(result.success===1){          
      setBetTicketNumber(result.bet.bet_number!);
      setClientName('');     
      toast.success(`Aposta realizada com sucesso!`);
      openModal();
      setBetItems([]);
      setBetAmount('0');      
    }    
  }

  useEffect(() => { 
    function calculateBetReturn() {
        const betReturnElem = document.getElementById('div_bet_return');
        if(betAmount.trim() !== ''){                  
            if(betReturnElem){
              if(betItems.length > 0){                
                let quote = betItems.reduce(function (previousValue, currentValue) {
                  return previousValue * currentValue.odd_selected_value
                }, 1)

                if(quote > 500) quote = 500;
                
                let return_bet = quote * parseFloat(betAmount);                

                if(return_bet>3000) return_bet = 3000;
                
                setBetReturn(new Intl.NumberFormat('pt-BR', { currency: 'BRL', minimumFractionDigits:2,  maximumFractionDigits:2 }).format(return_bet));

                betReturnElem.innerHTML = new Intl.NumberFormat('pt-BR', { currency: 'BRL', minimumFractionDigits:2,  maximumFractionDigits:2 }).format(return_bet);

              } else{
                betReturnElem.innerHTML = '0';
                setBetReturn('0');
              }               
            }                          
       }else{
            if(betReturnElem) betReturnElem.innerHTML = '0';
            setBetReturn('0,00');                
       }
    }    

    calculateBetReturn(); 
  
  }, [betAmount,betItems]);


  function setBetItem(event:any){
    
    const evento_id = event.target.getAttribute("data-evento_id");

    const alreadyExists = betItems.find(item => item.event_id === evento_id);
    if(alreadyExists){
      toast.error(`Para esta partida você já selecionou a opção ${alreadyExists.odd_selected}`);
      return;
    }

    const item = {
      event_id: event.target.getAttribute("data-evento_id"),
      odd_home: event.target.getAttribute("data-odd_home"),
      odd_draw: event.target.getAttribute("data-odd_draw"),
      odd_away: event.target.getAttribute("data-odd_away"),
      home_name: event.target.getAttribute("data-home_name"),
      away_name: event.target.getAttribute("data-away_name"),
      event_date: event.target.getAttribute("data-event_date"),
      odd_selected: event.target.getAttribute("data-name"),
      odd_selected_value: event.target.getAttribute("data-value")    
    }

    setBetItems([...betItems, item])    
  }

  function removeBetItem(id:string){
    const betItemIndex = betItems.findIndex(item => item.event_id === id);
    if(betItemIndex > -1){
      betItems.splice(betItemIndex, 1);
      setBetItems([...betItems]);      
    }
  }

  return (
    <Main>
      <EventsLinks/>
      <Container>
          <header>
              <p>Jogos de Hoje ({today})</p>
              <span>{matcheAmount} jogo(s)</span>
          </header>
          {
            upcomingEvents && upcomingEvents.map(league => {
            return (
              <>
              <League key={`div_${league.league_id}`}>
                  <div>
                        {league.league_name}
                  </div>
                  <OddMarket>                                                   
                      <OddMarketTitles>
                          <div><p>Casa</p></div>
                          <div><p>Empate</p></div>
                          <div><p>Fora</p></div>
                          <div><p>Mais</p></div>
                      </OddMarketTitles>                   
                  </OddMarket>
              </League>
              {league.events.map(event =>{
                  return (
                    <>
                      <MatcheContainer key={`div_matcheContainer_${event.event_id}`}
                      >
                          <MatcheDate >
                              <span>{event.date}</span>
                          </MatcheDate>

                          <MatcheOpponents>
                              <div>
                                  <p>{event.home_name}</p>
                              </div>

                              <div>
                                  <p>{event.away_name}</p>
                              </div>
                          </MatcheOpponents>

                          <MatcheOdds>
                              <Odds>
                                  <Odd> <p 
                                           data-name={`Vitória ${event.home_name}`} 
                                           data-value={event.odd_home} 
                                           data-evento_id={event.event_id}
                                           data-odd_home={event.odd_home}
                                           data-odd_draw={event.odd_draw}
                                           data-odd_away={event.odd_away}
                                           data-home_name={event.home_name}
                                           data-away_name={event.away_name}
                                           data-event_date={event.date}
                   
                                           onClick={setBetItem}>{event.odd_home}</p></Odd>


                                  <Odd> <p 
                                           data-name="Empate" 
                                           data-value={event.odd_draw}
                                           data-evento_id={event.event_id}
                                           data-odd_home={event.odd_home}
                                           data-odd_draw={event.odd_draw}
                                           data-odd_away={event.odd_away}
                                           data-home_name={event.home_name}
                                           data-away_name={event.away_name}
                                           data-event_date={event.date}
                                           onClick={setBetItem}
                                           >{event.odd_draw}</p> </Odd>

                                  <Odd> <p 
                                          data-name={`Vitória ${event.away_name}`} 
                                          data-value={event.odd_away}
                                          data-evento_id={event.event_id}
                                          data-odd_home={event.odd_home}
                                          data-odd_draw={event.odd_draw}
                                          data-odd_away={event.odd_away}
                                          data-home_name={event.home_name}
                                          data-away_name={event.away_name}
                                          data-event_date={event.date}
                                          onClick={setBetItem}
                                          >{event.odd_away}</p> </Odd>
                                  <Odd> <p>+</p> </Odd>
                              </Odds>
                          </MatcheOdds>

                      </MatcheContainer>

                    </>
                  )
              })}
          </>
            
            )             
            }
            )
            }


      </Container>
      <ContainerTicket>
            <ResumeContainer>                                    
                <BetStakeBox>
                    <BetStakeLabel>Valor da aposta</BetStakeLabel>                            
                    <BetStakeValueWraper>
                        <BetStakeUnit>R$</BetStakeUnit>
                        <BetStakeValue>                            
                            <input 
                            value={betAmount} 
                            onChange={event => setBetAmount(event.target.value)}
                            step="1" min="5"
                            
                            type="number" />
                        </BetStakeValue>
                    </BetStakeValueWraper>                            
                </BetStakeBox>
                    
                
               
                <BetReturn>
                    <BetReturnStakeLabel>Potencial retorno</BetReturnStakeLabel>                            
                    <BetReturnStakeValueWraper>
                        <BetReturnStakeUnit>R$</BetReturnStakeUnit>
                        <BetReturnStakeValue id="div_bet_return">
                            100,00
                        </BetReturnStakeValue>
                    </BetReturnStakeValueWraper>                            
                </BetReturn>
            </ResumeContainer>

            <BetClient>
                <input 
                value={clientName} 
                onChange={event => setClientName(event.target.value)}
                placeholder="Nome do apostador"  
                type="text" />
            </BetClient>

            <BetItems>
            
                {
                    betItems && betItems.map((betItem: IBetItem) =>{
                        return (
                            <>
                            <BetItem key={betItem.event_id}>
                                <div>
                                    <BetItemEvent>{betItem.home_name} x {betItem.away_name}, {betItem.event_date}</BetItemEvent>
                                    <BetItemMarket>Resultado final</BetItemMarket>
                                    <BetItemOdd>{betItem.odd_selected}. <span>Cotação: {betItem.odd_selected_value}</span></BetItemOdd>
                                </div>
                                <RemoveItem title="Remover" onClick={()=>removeBetItem(betItem.event_id)}>X</RemoveItem>
                            </BetItem>
                            <br/>
                        </>
                        )
                    })                    

                }
            </BetItems>
            
            {                             
               showFinalizeButtom ? <FinalizeButton onClick={() => {finalizeTicket()}} type="button" > Finalizar </FinalizeButton> : '' 
            }

        </ContainerTicket>


        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <h2>Aposta realizada com sucesso!</h2>
          <br/>
          <h2>Número do bilhete:{betTicketNumber}</h2>
          <br/>
          <button className="react-modal-close" onClick={closeModal}> Fechar </button>
        </Modal>

    </Main>

  );
};

export default Home;
