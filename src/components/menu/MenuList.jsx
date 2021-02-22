import React from 'react'
import PropTypes from 'prop-types'

import {MenuWrap} from './StyledMenuList'

// 此组件为公共组件，通过父组件传入不同的cate来实现分流显示分类和食材两个相似的页面
const MenuList = (props) => {
  // 拿到父组件传来的cate 来进行分流渲染(分类或者食材页面)
  // 解构cate, curCate两个父组件传来的属性
  const {cate, curCate} = props
  return (
    <MenuWrap>
      <aside>
        <ul>
          {
            // 利用短路运算 来判断cate是否有数据可以渲染
            cate && Object.keys(cate)
              .map(value => {
                return (
                  <li 
                    key={value}
                    // 根据父组件的curCate属性来实现高亮
                    className={curCate === value ? 'active' : ''}
                    // 点击调用父组件的方法来实现高亮和切换
                    onClick={props.onAsideClick(value)}
                  ><span>{value}</span></li>
                )
              })
          }
        </ul>
      </aside>
      <section>
        <ul>
          {
            cate && cate[curCate].map(value => {
              return (
                <li key={value}>{value}</li>
              )
            })
          }
        </ul>
      </section>
    </MenuWrap>
  )
}

// 属性验证
MenuList.propTypes = {
  cate: PropTypes.object,
  curCate: PropTypes.string
}

export default MenuList