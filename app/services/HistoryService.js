import { createHashHistory } from 'history';

let history;

export function getHistory() {
  if (!history) {
    history = createHashHistory({ queryKey: false });
  }

  return history;
}
