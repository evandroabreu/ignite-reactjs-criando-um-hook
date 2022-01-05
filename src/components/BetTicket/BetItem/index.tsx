import { useState, useEffect } from 'react';

import { 
    
    BetItem,
    BetItemEvent,
    BetItemMarket,
    BetItemOdd,
    RemoveItem

} from "./styles";

const BetItemComponent = () => {
    
<BetItem>
    <div>
        <BetItemEvent>São Paulo x Flamengo</BetItemEvent>
        <BetItemMarket>Resultado final</BetItemMarket>
        <BetItemOdd>Empate. <span>Cotação: 2.5</span></BetItemOdd>
    </div>
    <RemoveItem onClick={() => alert("Pei")}>X</RemoveItem>
</BetItem>
}

export default BetItemComponent;