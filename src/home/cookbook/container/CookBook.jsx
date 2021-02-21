import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreator'

import CookBookUi from '../ui/CookBookUi'

// 装饰器，拿到redux管理的ajax请求的数据
@connect(
  (state) => {
    return {
      list: state.cookbook.list
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(loadDataAsync())
    }
  })
)
class CookBook extends Component {
  render() {
    return(
      <CookBookUi
        // 将ajax请求到的数据传给ui组件 
        list={this.props.list}
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