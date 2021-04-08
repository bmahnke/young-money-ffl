import { get, writable, readable } from "svelte/store";
import { schedule } from './constants/nfl_schedule';
import { dayjs } from './lib/dayjs';

import EspnApi from "./services/espn_api"
 
function unsubscribe() {
	// Nothing to do in this case
}

let week = readable(1, set => {
  // TODO:
  //        this would just eventually be dayjs()
  var d = dayjs.utc("2021/10/08", "YYYY/MM/DD");
  set(Math.max(...schedule[dayjs().year()].filter(x => x.day < d).map(x => x.week)));
  return unsubscribe;
});

let season = readable(2019, set => {
  // TODO:
  //        this would just eventually be dayjs().year
  var d = dayjs.utc("2019/10/08", "YYYY/MM/DD").year();
  set(d);
  return unsubscribe;
});


function makeFreeAgentStore() {
	let initial = [];
  freeAgentsLoading.set(true);
	let store = readable(initial, makeSubscribe(initial, {})); 
	return store;
}

function makeSubscribe(data, _args) {
	return set => {
		fetchFreeAgents(data, set);
		return unsubscribe;
	};
}

async function fetchFreeAgents(data, set) {
		// 5. Dispatch the request for the users
	  const response = await EspnApi.freeAgents(get(season), get(week));
    set(response);
    freeAgentsLoading.set(false);
  }

let freeAgentsLoading = writable(false);
let freeAgents = makeFreeAgentStore();
let viewNflWeek = writable(0);
let darkTheme = writable(true);

export {
  week,
  viewNflWeek,
  season,
  freeAgents,
  freeAgentsLoading,
  darkTheme
}