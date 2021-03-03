import React, {useState, useCallback, useEffect } from 'react'

import {useHistory, useLocation } from 'react-router-dom'

import { Icon, NavBar } from 'antd-mobile'
import {DetailWrap} from './StyledDetail'
import animate from '@h/animate'

const Detail = (props) => {
  const [data,setdata] = useState('')
  const history = useHistory()
  const location = useLocation()
  // 拿到详情页数据
  let state = location.state
  useEffect(() => {
    setdata(state.data)
  }, [state])

  // 返回按钮的回调函数，退回上一个页面
  const handleLeftClick = useCallback(() => {
    // let from = this.props.location.state.from
    history.goBack()
  }, [history])

  return (
    <DetailWrap>
        <NavBar
        style={{backgroundColor: '#ee742f'}}
        icon={<Icon type="left" />}
        mode="dark"
        onLeftClick={handleLeftClick}
      >
        {data && data.name}
      </NavBar>
      <div>
        <div>
          <img src={data && data.img } alt=""/>
        </div>
        <div className="details">
          <h1>{data && data.name}</h1>
          <h3>{data && data.all_click}浏览 {data && data.favorites}收藏</h3>
          <button>收藏</button>
        </div>
      </div>
    </DetailWrap>
  )
} 
export default animate(Detail)

// @withRouter
// @animate
// class Detail extends Component {
//   // 返回按钮的回调函数，退回上一个页面
//   handleLeftClick = () => {
//     let {history} = this.props
//     // let from = this.props.location.state.from
//     history.goBack()
//   }
//   render() {
//     let state = this.props.location.state
//     return (
//       <DetailWrap>
//          <NavBar
//           style={{backgroundColor: '#ee742f'}}
//           icon={<Icon type="left" />}
//           mode="dark"
//           onLeftClick={this.handleLeftClick}
//         >
//           {state && state.title}
//         </NavBar>
//         <div>
//           <div>
//             <img src="http://s1.cdn.jiaonizuocai.com/caipu/201508/3113/311354095180.jpg/OTAweDYwMA" alt=""/>
//           </div>
//           <div className="details">
//             <h1>{state && state.title}</h1>
//             <h3>3242浏览 3048收藏</h3>
//             <button>收藏</button>
//           </div>
//         </div>
//       </DetailWrap>
//     )
//   }
// }
