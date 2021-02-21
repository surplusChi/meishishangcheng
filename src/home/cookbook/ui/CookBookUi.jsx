import React from 'react'
import PropTypes from 'prop-types' // 导入数据类型验证库
import memoize from 'memoize-one' // 导入计算属性模块(相当于vue的计算属性)

import { Container } from './StyledCookBook'
import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'

const CookBookUi = (props) => {
  // 计算属性，进行过滤，再把过滤完的数据传给子组件
  const swiper = memoize(list => list.slice(0,5))
  const top10 = memoize(list => list.slice(0,10))
 
  return (
    <Container>
      <header>美食大全</header>
      <Swiper list = {swiper(props.list)}></Swiper>
      <Search
         outerbg=""
         innerbg="#fff"
         hasborder={true}
      ></Search>
      <HotCate></HotCate>
      <Top10 list = {top10(props.list)}></Top10>
    </Container>
  )
}

// 函数式组件绑定数据类型验证
CookBookUi.propTypes = {
  list: PropTypes.array
}

export default CookBookUi