import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon, NavBar } from 'antd-mobile'

import { actionCreator } from '@/home/cookbook'
import animate from '@h/animate'

import {
  ListContainer,
  ListWrap,
  SubTitle
} from './StyledList'



@withRouter
@connect(
  (state) => ({
    list: state.cookbook.list
  }),
  (dispatch) => ({
    loadData() {
      dispatch(actionCreator.loadDataAsync())
    }
  })
)
@animate
class List extends Component {
  // 点击跳转路由到详情页
  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('/detail', { title, from: '/list' })
    }
  } 

  // 返回按钮的回调函数，退回上一个页面
  handleLeftClick = () => {
    let {history} = this.props
    // let from = this.props.location.state.from
    history.goBack()
  }
  componentDidMount() {
    // 解决刷新页面，redux数据丢失问题
    if (this.props.list.length === 0) {
      this.props.loadData()
    }
  }
  render() {
    let state = this.props.location.state
    return (
      <ListContainer>
        <NavBar
          style={{backgroundColor: '#ee742f'}}
          icon={<Icon type="left" />}
          mode="dark"
          onLeftClick={this.handleLeftClick}
        >
          {state && state.title}
        </NavBar>
        <ul>
          {
            this.props.list.map((li,i) => (
              <ListWrap
                width="0 0 1px 0 "
                key={li.id + i}
                onClick={this.handleGotoDetail(li.name)}
              >
                <div>
                  <img src={li.img} width="115" height="75" alt=""/>
                </div>
                <div>
                  <h1>{li.name}</h1>
                  <SubTitle>{li.burdens}</SubTitle>
                  <h3>{li.all_click}浏览 {li.favorites}收藏</h3>
                </div>
              </ListWrap>
            ))
          }
        </ul>
      </ListContainer>
    )
  }
}

export default List