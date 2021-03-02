import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreator from '../actionCreator'

import CookBookUi from '../ui/CookBookUi'

// 装饰器，拿到redux管理的ajax请求的数据
@withRouter
@connect(
  (state) => {
    return {
      list: state.cookbook.list
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(actionCreator.loadDataAsync())
    }
  })
)
class CookBook extends Component {
  // 点击跳转路由到详情页
  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('detail', { title })
    }
  }
  render() {
    return(
      <CookBookUi
        // 将ajax请求到的数据传给ui组件 
        list={this.props.list}
        // 点击跳转路由
        onGotoDetail={this.handleGotoDetail}
      ></CookBookUi>
    )
  }
  componentDidMount() {
    this.props.loadData()
  }
  // componentDidUpdate() {
  //   console.log(this.props.list)
  // }
}

export default CookBook