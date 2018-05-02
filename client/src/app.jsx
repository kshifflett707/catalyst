import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';

import store from './store.jsx';
import mapStateToProps from './store/stateToProps.jsx';
import mapDispatchToProps from './redux/actions/index.jsx';

class reactApp extends React.Component{
    render(){
        return(
          <h1>Welcome to our app!</h1>
        )
    }
}

export default App

/*


const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);


const mapStateToProps = (state) => {
  return {
    username: state.username,
  }
}

*/