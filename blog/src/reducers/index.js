import { combineReducers } from 'redux'
import blogs from './blogs'
import nexId from './nextId'

const rootReducer = combinneReducers({
  blogs,
  nextId,
})

export default rootReducer