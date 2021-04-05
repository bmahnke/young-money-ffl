import { get, writable, readable } from "svelte/store";
import { schedule } from './constants/nfl_schedule';
import { dayjs } from './lib/dayjs';

import EspnApi from "./services/espn_api"
 
let week = readable(1, set => {
  // TODO:
  //        this would just eventually be dayjs()
  var d = dayjs.utc("2021/10/08", "YYYY/MM/DD");
  set(Math.max(...schedule[dayjs().year()].filter(x => x.day < d).map(x => x.week)));
  return () => {};
});

let season = readable(2019, set => {
  // TODO:
  //        this would just eventually be dayjs().year
  var d = dayjs.utc("2019/10/08", "YYYY/MM/DD").year();
  set(d);
  return () => {};
});

let freeAgentsLoading = writable(false);
let freeAgents = readable([], async (set) => {
  freeAgentsLoading.set(true);
  
  EspnApi.freeAgents(get(season), get(week))
  .then(results => {
    set(results);
  }).finally(() => {
    freeAgentsLoading.set(false);
  });

  return () => {};
});

let viewNflWeek = writable(0);

export {
  week,
  viewNflWeek,
  season,
  freeAgents,
  freeAgentsLoading
}