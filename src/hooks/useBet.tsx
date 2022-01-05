import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { UpcomingEvents } from '../types';

interface BetProviderProps {
  children: ReactNode;
}

interface BetContextData {
  today: string;
  tomorrow: string;
  afterTomorrow: string;
  matcheAmount: string;
  date_option: string;
  league_id: string;
  upcomingEvents: UpcomingEvents[];

  setDateLink: (dateOption: string) => any;
  setLeagueLink: (leagueId: string) => any;
  

//   addProduct: (productId: number) => Promise<void>;
//   removeProduct: (productId: number) => void;
//   updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const BetContext = createContext<BetContextData>({} as BetContextData);

export function BetProvider({ children }: BetProviderProps): JSX.Element {
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvents[]>([]);
  const [date_option, setDateOption] = useState('');
  const [league_id, setLeagueId] = useState('');
  const [today, setToday] = useState('');
  const [tomorrow, setTomorrow] = useState('');
  const [afterTomorrow, setAfterTomorrow] = useState('');
  const [matcheAmount, setmatcheAmount] = useState('');

  useEffect(() => { 
    async function getUpcomingEvents(leagueId: string = '', dateOption: string = 'today') {
      const response = await api.post('events', {league_id: leagueId, date_option: dateOption}); //.then(response => setProducts(response.data));      
      const data = response.data;
  
      setToday(data.today);
      setTomorrow(data.tomorrow);
      setAfterTomorrow(data.afterTomorrow);
      setmatcheAmount(data.matcheAmount);
      setUpcomingEvents(data.upcomingEvents);
      setLeagueId(leagueId);
      setDateOption(dateOption);
    }    
    getUpcomingEvents(); 
  
  }, []);
  
  
 
  const setDateLink = async (dateOption: string) => {    
    const response = await api.post('events', {league_id: '', date_option: dateOption});
    const data = response.data;
  
    setToday(data.today);
    setTomorrow(data.tomorrow);
    setAfterTomorrow(data.afterTomorrow);
    setmatcheAmount(data.matcheAmount);
    setUpcomingEvents(data.upcomingEvents);
    setLeagueId('');
    setDateOption(dateOption);
        
  } 

  const setLeagueLink = async (leagueId: string) => {
    const response = await api.post('events', {league_id: leagueId, date_option: date_option});
    const data = response.data;
  
    setToday(data.today);
    setTomorrow(data.tomorrow);
    setAfterTomorrow(data.afterTomorrow);
    setmatcheAmount(data.matcheAmount);
    setUpcomingEvents(data.upcomingEvents);
    setLeagueId(leagueId);
  } 


  return (
    <BetContext.Provider
      value={{ setLeagueLink, setDateLink, upcomingEvents,date_option,league_id, today, tomorrow, afterTomorrow, matcheAmount }}
    >
      {children}
    </BetContext.Provider>
  );
}

export function useBet(): BetContextData {
  const context = useContext(BetContext);

  return context;
}
