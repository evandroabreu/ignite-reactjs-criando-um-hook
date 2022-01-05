export interface Market {
  id?: number;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
  id_api: string;
  name: string;
  description?: string | null;
  columns?: number | null;
  inplay: boolean;
}

export interface IFullTimeResult {
  odd_home: string;
  odd_draw: string;
  odd_away: string;
}

export interface UpcomingEvents {
  league_id: string;
  league_name: string;
  events: UpcomingEvent[];
}

export interface UpcomingEvent {
  event_id: string;
  date: string;
  home_name: string;
  away_name: string;
  odd_home: number;
  odd_draw: number;
  odd_away: number;
}
export interface League {
  id?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;

  league_id: number;
  sport_id: number;
  order?: number | null;
  image?: string | null;
  name?: string | null;
  api_name: string;
  country?: string | null;
}

export interface Event {
  id?: string | number | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;

  event_id: string;
  event_date: Date;
  event_time: Date;
  inplay: boolean;
  event_description?: string;
  last_updated?: Date | null;
  time_status: number;
  our_event_id?: number;
  sport_id: number;
  country?: string | null;
  home_id?: number;
  home_image?: string;
  home_name: string;
  odd_home: number;
  odd_draw: number;

  away_id?: number;
  away_image?: string;
  away_name: string;
  odd_away: number;

  score_home?: number;
  score_away?: number;

  league_id?: string | null;
}

export interface IPayloadToken {
  id: string;
  userName: string;
  email: string;
  is_manager: boolean;
  is_money_changer: boolean;
  is_owner: boolean;
  is_super: boolean;
  bet_house_id: string;
  owner_id: string;
}

export interface IAuthenticationUser {
  username: string;
  password: string;
}

export interface IBetItem {
  event_id: string;
  odd_home: number;
  odd_draw: number;
  odd_away: number;
  home_name: string;
  away_name: string;
  event_date: string;
  odd_selected: string;
  odd_selected_value: number;
}

export interface Bet {
  id?: string;
  date: Date;
  awarded: boolean;
  bet_amount: number;
  award_amount?: number;
  bet_number?: number;
  confirmed: boolean;
  bet_client_id?: string;
  user_id?: string;
  bet_house_id?: string;
}

export interface IBetClient {
  id?: string;
  name: string;
  bet_house_id?: string;
}
export interface IResultPostBet {
  success: number;
  bet: Bet;
  bet_items: IBetItem[];
  bet_client?: IBetClient;
}

export interface IPayloadToken {
  id: string;
  userName: string;
  email: string;
  is_manager: boolean;
  is_money_changer: boolean;
  is_owner: boolean;
  is_super: boolean;
  bet_house_id: string;
  owner_id: string;
}
