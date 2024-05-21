// import { legacy_createStore as createStore } from 'redux'
import { Store, configureStore } from '@reduxjs/toolkit' 
import { legacy_createStore } from 'redux';

import reducer from './reducer';

// const store = createStore(
//     reducer, {}
// )

// const store = configureStore({
//     reducer: reducer
// })

const store = legacy_createStore(reducer, {})

export default store;