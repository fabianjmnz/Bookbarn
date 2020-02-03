

const initialState = {
  Username: '',
  isAuthorized:false
}

const reducer = (state = initialState,action) =>{
  switch(action.type){
    case 'USERNAME':
      return {
        ...state,
        Username: action.myusername,
        isAuthorized:true
      }
    case 'NoUSERNAME':
      return {
        ...state,
        Username:'',
        isAuthorized:false
      }
    default:
      return state;
  }

}

export default reducer