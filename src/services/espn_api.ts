import { Client } from 'espn-fantasy-football-api';

const espnClient = new Client({ 
  leagueId: 1241838
});

const league = async function(season: Number) {
  let p = await espnClient.getLeagueInfo({ seasonId: season});
  return p
}

const EspnApi = {
  league
}
export default EspnApi;
