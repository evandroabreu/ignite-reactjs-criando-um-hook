import { useState, useEffect } from 'react';
import { IBetItem } from '../../types';

import { Container, 
    ResumeContainer, 
    BetReturn, 
    BetStakeBox, 
    BetStakeLabel, 
    BetStakeUnit, 
    BetStakeValue, 
    BetStakeValueWraper,
    BetReturnStakeLabel,
    BetReturnStakeValueWraper,
    BetReturnStakeUnit,
    BetReturnStakeValue,
    BetItems,
    BetItem,
    BetItemEvent,
    BetItemMarket,
    BetItemOdd,
    RemoveItem

} from "./styles";


const BetTicket = () => {
    const [betItems, setBetItems] = useState<IBetItem[]>([]); 
    const [betAmount, setBetAmount] = useState('0'); 
    const [betReturn, setBetReturn] = useState(''); 
    
    //console.log(props.betItems);
    
    useEffect(() => { 
        function calculateBetReturn() {
            const betReturnElem = document.getElementById('div_bet_return');
            if(betAmount.trim() !== ''){                  
                if(betReturnElem){
                    betReturnElem.innerHTML = betAmount;
                }                
                setBetReturn(betAmount);
            }else{
                if(betReturnElem)
                   betReturnElem.innerHTML = '0,00';
                setBetReturn('0,00');                
            }
      
        }    
        calculateBetReturn(); 
      
      }, [betAmount]);
    
    
    return (
        <Container>
            <ResumeContainer>                                    
                <BetStakeBox>
                    <BetStakeLabel>Valor da aposta</BetStakeLabel>                            
                    <BetStakeValueWraper>
                        <BetStakeUnit>R$</BetStakeUnit>
                        <BetStakeValue>                            
                            <input 
                            value={betAmount} 
                            onChange={event => setBetAmount(event.target.value)}
                            type="text" />
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

            <BetItems>
                {
                    betItems && betItems.map((betItem: IBetItem) =>{
                        return (
                            <>
                            <BetItem>
                                <div>
                                    <BetItemEvent>{betItem.home_name} x {betItem.away_name}</BetItemEvent>
                                    <BetItemMarket>Resultado final</BetItemMarket>
                                    <BetItemOdd>{betItem.odd_selected}. <span>Cotação: {betItem.odd_selected_value}</span></BetItemOdd>
                                </div>
                                <RemoveItem onClick={() => alert("Pei")}>X</RemoveItem>
                            </BetItem>
                            <br/>
                        </>
                        )
                    })
                }
            </BetItems>

        </Container>
    )
}

export default BetTicket;