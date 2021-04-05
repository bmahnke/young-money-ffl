import { Client } from 'espn-fantasy-football-api';

const espnClient = new Client({ 
  leagueId: 1241838
});

const league = async function(season: Number) {
  let p = await espnClient.getLeagueInfo({ seasonId: season});
  return p
}

const teams = async function(season: Number, week: Number) {
  let p = await espnClient.getTeamsAtWeek({ seasonId: season, scoringPeriodId: week });
  return p;
}

const freeAgents = async function(season: Number, week: Number) {
  let p = await espnClient.getFreeAgents({ seasonId: season, scoringPeriodId: week })
  return p;
}

const EspnApi = {
  league,
  teams,
  freeAgents
}
export default EspnApi;
