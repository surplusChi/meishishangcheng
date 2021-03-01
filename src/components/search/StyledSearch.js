import styled from 'styled-components'

import border from '@a/styled/border'

const Container =  styled.div `
  padding: .1rem .15rem;
  background-color: ${(props) => props.outerbg};
`
// 一像素边框包裹--传参进行一像素边框处理
const InnerContainer = border(
  styled.div `
    display: flex;
    height: .4rem;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.innerbg};
    svg{
      width: .18rem;
      height: .18rem;
      margin-right: .06rem;
      fill: #ee742f;
    }
    span{
      color: #666;
    }
`
)

export {
  Container,
  InnerContainer
}