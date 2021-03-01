import { combineReducers } from 'redux'

import {
  reducer as cookbook
} from '../home/cookbook'

import {
  reducer as home
} from '../home/'

// 合并reducer， 将多个reducer合并成一个大的对象
const reducer = combineReducers({
  cookbook,
  home
})

export default reducer