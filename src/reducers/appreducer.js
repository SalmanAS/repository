
const initialState = {
    appState: 'initial',
    contact: {}
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SCREENLOAD_SUCCESS' :
            return {...state, appState: action.appState};      
        case 'API_CALL_SUCCESS' :
            return {...state, appState: action.appState, contact: action.contact};      
        default:
            return state;
    }
}

export default appReducer;