import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuList from '@c/menu/MenuList'
import {get} from '@u/http'

class Menu extends Component {
  // 对父组件传来的值做属性验证
  static propTypes = {
    type: PropTypes.string
  }
  state = {
    cate: null,
    // type为当前组件的type和父组件传来的type做比较来进行逻辑判断的状态
    type: 'category',
    curCate: this.props.type === 'category' ? '热门' : '肉类'
  }
  
  // 这个钩子函数，父组件传入的props发生改变，当前组件state发生改变都会被调用(特别敏感-小心使用)
  static getDerivedStateFromProps(nextProps, preState) {
    // 当前组件的type状态和父组件传来的type属性值相同时，不做任何操作(子组件可以改变curCate状态)
    if (nextProps.type === preState.type) {
      return null
    } else {
      return {
        // 如果不相等，就通过父组件传来的type值，来进行操作
        curCate: nextProps.type === 'category' ? '热门' : '肉类',
        // 同时不相等，还有把当前组件的type值改为父组件传来的type进行维护
        // 就可以保障父组件和子组件都可以改变curCate状态的值了
        type: nextProps.type
      }
    }
  }

  // 通过ajax请求拿取数据
  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })
    // 拿到的数据赋给当前组件的状态用于管理和维护
    this.setState({
      cate: result.data.data
    })
  }

  // 定义点击事件函数 curCate是子组件传来的属性值，用于改变curCate状态(实现高亮和不同模块内容的切换)
  handleAsideClick = (curCate) => {
    return () => {
      this.setState({
        curCate
      })
    }
  }

  render() {
    return (
      <MenuList 
        // onAsideClick: 传入一个方法给子组件来实现点击效果
        onAsideClick={this.handleAsideClick}
        // cate状态用于存储不同的数据(分类和食材两个不同分支)都是靠父组件传来的type属性实现改变
        cate={this.state.cate && this.state.cate[this.props.type]}
        // curCate状态用于子组件的高亮和不同内容的显示
        curCate={this.state.curCate}
      >   
      </MenuList>
    )
  }
}

export default Menu

