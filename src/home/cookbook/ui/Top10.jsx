import React from 'react'
import PropTypes from 'prop-types' // 导入数据类型验证库

import { Top10Wrap, SubTitle } from './StyledCookBook'

const Top10 = (props) => {
  return (
    <Top10Wrap>
      <h1>精品好菜</h1>
      <ul>
        {
          props.list.map(value => {
            return (
              <li key={value.id}>
                <div>
                  <img src={value.img} alt=""/>
                </div>
                <div>
                  <p>{value.name}</p>
                  <SubTitle><span>{value.all_click}</span>浏览  <span>{value.favorites}</span>收藏</SubTitle>
                </div>
              </li>
            )
          })
        }
      </ul>
    </Top10Wrap>
  )
}

// 函数式组件绑定数据类型验证
Top10.propTypes = {
  list: PropTypes.array
}

export default  Top10