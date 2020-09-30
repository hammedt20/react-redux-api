import { combinedReducers } from 'redux' 
import userReducer from './user/userReducer'

const rootReducer = combinedReducers ({
    user: userReducer
})

export default rootReducer 