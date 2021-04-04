import { writable } from "svelte/store";
import { readable } from 'svelte/store';
import { schedule } from './constants/nfl_schedule';
import { dayjs } from './lib/dayjs';
 
let week = readable(1, set => {
  // TODO:
  //        this would just eventually be dayjs()
  var d = dayjs.utc("2021/10/08", "YYYY/MM/DD");
  set(Math.max(...schedule[dayjs().year()].filter(x => x.day < d).map(x => x.week)));
  return () => {};
});


let viewNflWeek = writable(0);

export {
  week,
  viewNflWeek
}