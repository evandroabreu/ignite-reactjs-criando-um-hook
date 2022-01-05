import styled from 'styled-components';
import { darken } from 'polished';

export const BetClient = styled.div`
    padding: 10px;
    input{
            background-color:#232129;
            border-radius: 10px;
            border: 1px solid #232129;
            padding:16px;
            width: 100%;
            color: #fff;
            & + input {
                margin-top: 16px;
            }
    }
`;

export const OddMarket = styled.div`
    font-weight: 400;    
    padding-right: 8px;
    padding-left: 8px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const OddMarketTitles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 240px;

    div {
       width: 60px;   
   
        p {
          text-align: center;
          line-height: 15px;   
        }

    }
`
export const MatcheContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    justify-content: flex-start;
    border-bottom: 1px solid #636363;
    & + div {
    padding-bottom: 5px;
    padding-top: 5px;
  }

`
export const MatcheDate = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: flex-start;          
    font-weight: 400;
    font-size: 0.70rem;
    padding-right: 8px;
    padding-left: 8px;
    color: #cecece;
    div{
      line-height: 20px;
      font-size: 0.75rem;
      font-weight: 400;
    }
`

export const MatcheOdds = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Odds = styled.div`
    display: flex;
    flex-direction: row;

`
export const Odd = styled.div`
    display: flex;
    flex-direction: column;  

    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 0.75rem;
    color: #ffdf1b;

    width: 60px;

    cursor: pointer;

    border-left-width: 0;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
        font-size:1.2em;
        color: white;
        text-decoration: none;
        -webkit-text-stroke: 2px darkgreen; 
        transition-timing-function: ease-in-out;        
    }

    
    p {
        text-align: center;
        line-height: 15px;
        width: 100%;
    }
`
export const MatcheOpponents = styled.div`
    display: flex;
    flex-direction: column;  
    width: 16.3rem;    
    color: #cecece;
    font-size: 0.85rem;
    div{
      
      p{
  
      }
    }

`

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    max-width: 1120px;
    height: 5rem;
    margin:  0 auto;

`

export const Container = styled.div`
    min-width: 35rem;

    >header{
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #9E6900;

      p {          
          color: #2ec193;
          font-size: 12px;
          font-weight: 700;
          font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Tahoma,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Open Sans,sans-serif;
      }

      span {
          padding-left: 10px;
          padding-right: 10px;
          margin-left: auto;
          flex-shrink: 0;
          color: #cecece;
          font-size: 0.65rem;
          font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Tahoma,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Open Sans,sans-serif;
    }
}
`

export const League = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 8px;
  max-height: 1.5rem;    
  height:40px;
  width: 100%;
  
  border-bottom: 1px solid #666;
  color: #cecece;
  background-color: var(--gray-580);
  
  font-weight: 400;
  font-size: 0.75rem;  
  
  & + div {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

export const ProductList = styled.ul`
display: grid;
grid - template - columns: repeat(3, 1fr);
grid - gap: 20px;
list - style: none;

  li {
  display: flex;
  flex - direction: column;
  background: #fff;
  border - radius: 4px;
  padding: 20px;

    img {
    align - self: center;
    max - width: 250px;
  }

    > strong {
    font - size: 16px;
    line - height: 20px;
    color: #333;
    margin - top: 5px;
  }

    > span {
    font - size: 21px;
    font - weight: bold;
    margin: 5px 0 20px;
  }

    button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border - radius: 4px;
    overflow: hidden;
    margin - top: auto;

    display: flex;
    align - items: center;
    transition: background 0.2s;

      &:hover {
      background: ${darken(0.06, '#7159c1')};
    }

      div {
      display: flex;
      align - items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

        svg {
        margin - right: 5px;
      }
    }

      span {
      flex: 1;
      text - align: center;
      font - weight: bold;
    }
  }
}
`;


/******************************************* */
export const ContainerTicket = styled.div`
    display: flex;
    flex-direction: column;    
            


`;

export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: row;    

`;

export const BetStakeBox = styled.div`
    display: flex;
    flex-direction: column;    
    background: #141419;
    padding-top: 10px;
    padding-left: 10px;
    width: 150px;
    border-bottom: 2px solid #9E6900;
    height: 56px;

`;

export const BetStakeLabel = styled.div`
    font-size: 0.9rem;
    color: #b5b5b5;
    padding-bottom: 5px;
    
`;


export const BetStakeValueWraper = styled.div`
    display: flex;
    flex-direction: row;    


`;

export const BetStakeUnit = styled.div`
    color: #58d7af;
    font-size: 0.8rem;
    padding-right: 5px;
`;

export const BetStakeValue = styled.div`
    color:#58d7af;
    input{
        border:0;
        background: #141419;
        color: #fff;
    }
`;


export const BetReturn = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    border-bottom: 2px solid #9E6900;
    height: 56px;
    background: #137A5A;
`;

export const BetReturnStakeLabel = styled.div`
    color: #fff;
    font-size: 0.9rem;
    width: 150px;
    height: 20px;

`;
export const BetReturnStakeValueWraper = styled.div`
    display: flex;
    flex-direction: row;    

`;

export const BetReturnStakeUnit = styled.div`
    padding-right: 5px;
    font-size: 0.8rem;
    color: #fff;
`;


export const BetReturnStakeValue = styled.div`
color: #fff;
`;

export const BetItems = styled.div`
    background: var(--gray-100);
    padding:10px;
    overflow-y: scroll;
    min-height:500px;
`;

export const BetItem = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    border: 2px solid #9E6900;

    
`;


export const BetItemEvent = styled.div`
    font-size: 0.95rem;
    color: ##545454;
    line-height:18px;
    padding-top: 10px;
    padding-left: 10px;
    font-weight: 700;
`;

export const BetItemMarket = styled.div`
    font-size: 0.95rem;
    padding: 0 10px;

    span {
        font-weight: 700;
    }
    

`;

export const BetItemOdd = styled.div`
    font-size: 0.95rem;
    padding-left: 10px;
    padding-bottom: 10px;

    span {
        font-weight: 700;
        color: #137a5a;
    }

`;


export const RemoveItem = styled.div`
   padding: 10px;
   cursor: pointer;
`;


export const FinalizeButton = styled.button`   
   cursor: pointer;
   background-color: #137A5A; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

`;
