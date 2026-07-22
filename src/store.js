export const initialStore=()=>{
  return{
    resultsPerson: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_results':
      return {
        ...store,
        resultsPerson: action.payload
        
      };

    default:
      throw Error('Unknown action.');
  }    
}
