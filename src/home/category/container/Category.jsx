import React, { Component } from 'react'

import CategoryUi from '../ui/CategoryUi'

class Category extends Component {
  state = {
    tabIndex: 0,
    type: 'category'
  }
  handleClick = (index) => {
    return () => {
      this.setState({
        tabIndex: index,
        // 给Menu组件传入一个属性来实现共享页面需求(根据点击的li的index来改变)
        type: index === 0 ? 'category' : 'material'
      })
    }
  }
  render() {
    return (
      // 引入ui组件，并传入属性给ui组件
      <CategoryUi
        tabIndex={this.state.tabIndex}
        type={this.state.type}
        onCategoryUiClick={this.handleClick}
      ></CategoryUi>
    )
  }
}

export default Category