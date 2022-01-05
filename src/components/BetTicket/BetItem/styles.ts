import styled from 'styled-components';

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
