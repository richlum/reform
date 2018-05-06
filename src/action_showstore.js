


// call (null, { "type": "SHOW_STORE"})
export default function(state = [], action){
  switch (action.type){
    case 'SHOW_STORE':
      console.log('state = ',state)
      return state;
  }
  return state;
}
