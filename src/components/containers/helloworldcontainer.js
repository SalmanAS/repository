import {connect} from 'react-redux';
import HelloWorld from '../panels/HelloWorld.jsx';
import {screenLoad, fetchContacts} from '../../actions/commonactions';

const mapStateToProps = (state, ownProps) => {
    return {
        appState: state.appReducer.appState,
        contact: state.appReducer.contact
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onScreenload: () => {
            dispatch(screenLoad());
        },
        onFetchContacts: () => {
            dispatch(fetchContacts());
        }
    }
}

const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld)

export default HelloWorldContainer;