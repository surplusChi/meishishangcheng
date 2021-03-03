import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import actionCreator from '../actionCreator'

import CookBookUi from '../ui/CookBookUi'

// 改造成hooks组件
const CookBook = (props) => {
  // useStore不能再第二次拿取数据时，重新渲染页面，useSelector可以实现state的跟踪和缓存
  // const {cookbook} = useStore().getState()
  const state = useSelector(state => state.cookbook)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(actionCreator.loadDataAsync())
  }, [dispatch])

  // 点击跳转路由到详情页
  const handleGotoDetail = (title) => {
    return () => {
      history.push('detail', { title })
    }
  }
  return(
    <CookBookUi
      // 将ajax请求到的数据传给ui组件 
      list={state.list}
      // 点击跳转路由
      onGotoDetail={handleGotoDetail}
    ></CookBookUi>
  )
}

export default CookBook

// 装饰器，拿到redux管理的ajax请求的数据
// @withRouter
// @connect(
//   (state) => {
//     return {
//       list: state.cookbook.list
//     }
//   },
//   (dispatch) => ({
//     loadData() {
//       dispatch(actionCreator.loadDataAsync())
//     }
//   })
// )
// class CookBook extends Component {
//   // 点击跳转路由到详情页
//   handleGotoDetail = (title) => {
//     return () => {
//       this.props.history.push('detail', { title })
//     }
//   }
//   render() {
//     return(
//       <CookBookUi
//         // 将ajax请求到的数据传给ui组件 
//         list={this.props.list}
//         // 点击跳转路由
//         onGotoDetail={this.handleGotoDetail}
//       ></CookBookUi>
//     )
//   }
//   componentDidMount() {
//     this.props.loadData()
//   }
// }