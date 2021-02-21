import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'antd-mobile' // 导入组件库方法

import { SwiperWrap } from './StyledCookBook'

const Swiper = (props) => {
  return (
    <SwiperWrap>
      <Carousel
        autoplay={true}
        infinite
      >
        {
          // 只有当请求到了数据，才进行渲染
          props.list.length > 0 && 
            props.list.map(value => {
              return (
                <img key={value.id} src={value.img} alt=""/>
              )
            })
        }
      </Carousel>
    </SwiperWrap>
  )
}
// 函数式组件绑定数据类型验证
Swiper.propTypes = {
  list: PropTypes.array
}

export default Swiper