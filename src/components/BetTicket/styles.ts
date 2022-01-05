import styled from 'styled-components';


export const Container = styled.div`
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
`;


export const BetReturnStakeValue = styled.div``;

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
