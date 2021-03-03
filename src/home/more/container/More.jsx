import React, { useCallback } from 'react'
import { Switch, NavBar } from 'antd-mobile'
import { MoreWrap, TitleBar } from './StyledMore'
import { useDispatch,useSelector } from 'react-redux'

import { actionCreator } from '@/home/'

// hooks组件
const More = (props) => {
  const checked = useSelector(state => state.home.checked) 
  const dispatch = useDispatch()

  const handleChange = useCallback((checked) => {
      dispatch(actionCreator.changeChecked(checked))
      // 本地存储： 将checked存储到本地
      localStorage.setItem('checked', checked)
    }, [dispatch]
  )
  return (
    <TitleBar>
      <NavBar
        mode="dark"
      >更多</NavBar>
      <MoreWrap>
        <span>显示地图：</span>
        <Switch
          checked={checked}
          onChange={handleChange}
        ></Switch>
      </MoreWrap>
    </TitleBar>
  )
}

export default More


// @connect(
//   state => ({
//       checked: state.home.checked

//   }),
//   dispatch => ({
//     handleChange(checked) {
//       dispatch(actionCreator.changeChecked(checked))

//       // 本地存储： 将checked存储到本地
//       localStorage.setItem('checked', checked)
//     }
//   })
// )
// class More extends Component {
//   render() {
//     return (
//       <TitleBar>
//         <NavBar
//           mode="dark"
//         >更多</NavBar>
//         <MoreWrap>
//           <span>显示地图：</span>
//           <Switch
//             checked={this.props.checked}
//             onChange={this.props.handleChange}
//           ></Switch>
//         </MoreWrap>
//       </TitleBar>
//     )
//   }
// }