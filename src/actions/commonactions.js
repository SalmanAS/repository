import API from '../utils/API'

export function screenLoad() {
    return { type: 'SCREENLOAD_SUCCESS', appState: 'screenloaded'};
}

export function fetchContacts() {
    return (dispatch, getState) => {
        API.get('/', {

        })
        .then((response) => {
            const contact = response.data.results[0];
            dispatch({ type: 'API_CALL_SUCCESS', appState: 'api-success', contact});
        })
        .catch((error) => {
            console.log('API call error');
        });
    }    
}