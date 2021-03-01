import { changeSwitch } from './actionTypes'

// 管理一个状态用于更多页面来控制显示隐藏，美食地图页面
const defaultState = {
  // 第一次渲染时，将checked的值从本地取出，进行渲染
  // checked: localStorage.getItem('checked') === 'ture' ? true : false
  checked: JSON.parse(localStorage.getItem('checked')) // 将取出来的值转换成json格式对象
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case changeSwitch: 
      return {
        checked: action.checked
      }
    default:  
      return state
  }
}

export default reducer