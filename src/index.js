import store from "./store";
import { bugAdded } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log("store changes", store.getState());
});

store.dispatch(bugAdded('Bug 1'));



console.log(store.getState());
