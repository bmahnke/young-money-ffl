import {get, readable } from "svelte/store";

import ban from './ban.svg';
import check from './check.svg';
import clock from './clock.svg';
import minus_circle from './minus_circle.svg';
import question_mark_circle from './question_mark_circle.svg';

function unsubscribe() {
  // Nothing to do in this case
}

const icons = readable({}, set => {
  set({
    ban: ban,
    check: check,
    clock: clock,
    minus_circle: minus_circle,
    question_mark_circle: question_mark_circle
  })
  return unsubscribe;
});

function getByName(name) {
  return get(icons)[name] || '';
}

export const IconStore = {
  getByName
}