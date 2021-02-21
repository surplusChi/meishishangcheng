import { LOADDATA } from './actionTypes'

import { get } from '@u/http.js'
// 同步数据
const loadDataSync = list => {
  return {
    type:  LOADDATA,
    list
  }
}

// 异步请求数据
const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await get({
      url: 'api/list'
    })
    // console.log(result)
    dispatch(loadDataSync(result.data.data))
  }
}

export {
  loadDataSync,
  loadDataAsync
}