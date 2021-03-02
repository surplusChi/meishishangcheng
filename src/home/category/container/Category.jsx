import React, { Component } from 'react'
import {connect} from 'react-redux'
import { actionCreator as ac } from '@/home/category'

import CategoryUi from '../ui/CategoryUi'

@connect(
  state => ({
    // 记录点击分类还是食材的值
    cateType: state.category.routeInfo.cateType
  }),
  dispatch => ({
    // 派发一个方法记录type的值
    changeCateType(type) {
      dispatch(ac.changeCateType(type))
    },
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Category extends Component {
  handleClick = (type) => {
    return () => {
      //点击按钮，记录type的值
      this.props.changeCateType(type)
      this.props.changeCateAside(type === 'category' ? '热门' : '肉类')
    }
  }
  render() {
    return (
      // 引入ui组件，并传入属性给ui组件
      <CategoryUi
        // 读取reducer里面的公共状态
        type={this.props.cateType}
        onCategoryUiClick={this.handleClick}
      ></CategoryUi>
    )
  }
}

export default Category