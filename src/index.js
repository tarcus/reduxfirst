import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/containers/App'
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
<BrowserRouter> 
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>,document.getElementById('root'))