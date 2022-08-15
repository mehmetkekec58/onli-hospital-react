import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";


const reduxConfigureStore = configureStore({
    reducer:rootReducer
})

export default reduxConfigureStore;