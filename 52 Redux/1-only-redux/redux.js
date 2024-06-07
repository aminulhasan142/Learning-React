const redux = require("redux");

const INITIAL_VALUE = {
  coutner: 0
}

const reducer = (store= INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === 'INCREMENT'){
    newStore = {coutner: store.coutner + 1}
  } else if (action.type === 'DECREMENT'){
    newStore = {coutner: store.coutner - 1}
  }else if (action.type === 'ADDITION'){
    newStore = {coutner: store.coutner + action.payload.number}
  }
  return newStore;
}

const store = redux.createStore(reducer);


const subscriber = () => {
  const sate = store.getState();
  console.log(sate);
}


store.subscribe(subscriber);


store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'ADDITION', payload:{number: 7}})