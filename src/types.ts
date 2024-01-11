export interface IPlayer {
  id: number;
  name: string;
}

export interface IScore {
  playerId: number;
  playerName: string;
  scores: number[];
}
