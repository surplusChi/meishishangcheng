import React, { useCallback,useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { actionCreator as ac } from '@/home/category'
 
import MenuList from '@c/menu/MenuList'
import {get} from '@u/http'

// hooks组件
const Menu = (props) => {
  let [cate, setCate] = useState(null)
  const cateAside = useSelector(state => state.category.routeInfo.cateAside)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // 立即调用函数
    (async() => {
      let result = await get({
        url: '/api/category'
      })
      // 拿到的数据赋给当前组件的状态用于管理和维护
      setCate(result.data.data)

      // 当cateAside为空的时候，才进行初始化
      if(cateAside === '') {
        // 根据父组件传来的reducer里面的type值，判断高亮和内容是啥
        dispatch(ac.changeCateAside(props.type === 'category' ? '热门' : '肉类'))
      }
    })()
  },[cateAside , dispatch, props.type])

  // 定义点击事件函数 curCate是子组件传来的属性值，用于改变curCate状态(实现高亮和不同模块内容的切换)
  const handleAsideClick = useCallback((curCate) => {
    return () => {
      // 点击修改reducer里面的公共状态
      dispatch(ac.changeCateAside(curCate))
    }
  },[dispatch])

  const handleGotoList = useCallback((title) => {
    return () => {
      // console.log(title)
      history.push('./list', {title})
    }
  },[history])

  return (
    <MenuList 
      // onAsideClick: 传入一个方法给子组件来实现点击效果
      onAsideClick={handleAsideClick}
      // cate状态用于存储不同的数据(分类和食材两个不同分支)都是靠父组件传来的type属性实现改变
      cate={cate && cate[props.type]}
      // 读取reducer里面的公共状态cateAside，用于子组件的高亮和不同内容的显示
      curCate={cateAside}
      onGotoList={handleGotoList}
    >   
    </MenuList>
  )
}

Menu.propTypes= {
  type: PropTypes.string
}

export default Menu

// @withRouter
// @connect(
//   state => ({
//     // 拿到reducer里面的两个公共状态
//     cateAside: state.category.routeInfo.cateAside,
//     // cateType: state.category.routeInfo.cateType
//   }),
//   dispatch => ({
//     // 派发一个方法。记录当前点击的cateAside值
//     changeCateAside(cateAside) {
//       dispatch(ac.changeCateAside(cateAside))
//     }
//   })
// )
// class Menu extends Component {
//   // 对父组件传来的值做属性验证
//   static propTypes = {
//     type: PropTypes.string
//   }
//   state = {
//     cate: null,
//     // type为当前组件的type和父组件传来的type做比较来进行逻辑判断的状态
//     // type: 'category',
//     // curCate: this.props.type === 'category' ? '热门' : '肉类'
//   }

//   // 通过ajax请求拿取数据
//   async componentDidMount() {
//     let result = await get({
//       url: '/api/category'
//     })
//     // 拿到的数据赋给当前组件的状态用于管理和维护
//     this.setState({
//       cate: result.data.data
//     })
//     // 当cateAside为空的时候，才进行初始化
//     if(this.props.cateAside === '') {
//       // 根据父组件传来的reducer里面的type值，判断高亮和内容是啥
//       this.props.changeCateAside(this.props.type === 'category' ? '热门' : '肉类')
//     }
//   }

//   // 定义点击事件函数 curCate是子组件传来的属性值，用于改变curCate状态(实现高亮和不同模块内容的切换)
//   handleAsideClick = (curCate) => {
//     return () => {
//       // 点击修改reducer里面的公共状态
//       this.props.changeCateAside(curCate)
//     }
//   }

//   handleGotoList = (title) => {
//     return () => {
//       // console.log(title)
//       this.props.history.push('./list', {title})
//     }
//   }

//   render() {
//     return (
//       <MenuList 
//         // onAsideClick: 传入一个方法给子组件来实现点击效果
//         onAsideClick={this.handleAsideClick}
//         // cate状态用于存储不同的数据(分类和食材两个不同分支)都是靠父组件传来的type属性实现改变
//         cate={this.state.cate && this.state.cate[this.props.type]}
//         // 读取reducer里面的公共状态cateAside，用于子组件的高亮和不同内容的显示
//         curCate={this.props.cateAside}
//         onGotoList={this.handleGotoList}
//       >   
//       </MenuList>
//     )
//   }
// }

