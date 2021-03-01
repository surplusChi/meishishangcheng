import styled from 'styled-components'

import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const Container = styled.div`
  header {
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    background-color: #ee742f;
    color: #fff;
  }
`
const SwiperWrap = styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 66.666667%;
  position: relative;

  .slider .am-carousel {
    position: static !important;
  }
`
// 一像素边框包裹--传参进行一像素边框处理
const H1Container = border(
  styled.h1 `
    height: .5rem;
    padding-left: .2rem;
    color: #666;
    line-height: .5rem;
    background-color: #fff;
    font-weight: normal;
  `
)
const HotCateWrap = styled.div `
  > div {
    background-color: #fff;
    padding-top: .2rem;
    .grid-itme {
    img {
      width: .6rem;
      height: .6rem;
      margin-bottom: .04rem;
      border-radius: .06rem;
      &[src='blank'] {
        display: none;
      }
    }
  }
  .am-grid-item-content {
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
  }
`
// 多行文本溢出包裹
const SubTitle = ellipsis(
  styled.p ``
)
const Top10Wrap = styled.div `
  h1 {
    height: .5rem;
    padding-left: .2rem;
    color: #666;
    line-height: .5rem;
    font-weight: normal;
  }
  ul {
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: .15rem;
    li{
      width: 50%;
      padding-right: .13rem;
      img {
        width: 100%
      }
      > div:last-child {
        display: flex;
        flex-direction: column;
        height: .6rem;
        background-color: #fff;
        margin-bottom: .1rem;
        justify-content: center;
        align-items: center;
        > p:first-child {
          font-size: .18rem;
        }
        > p:last-child {
          color: #666;
        }
      }
    }
  }
`
export {
  Container,
  SwiperWrap,
  HotCateWrap,
  Top10Wrap,
  H1Container,
  SubTitle
}