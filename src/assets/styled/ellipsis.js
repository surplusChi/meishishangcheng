import styled from 'styled-components'

// 多行文本溢出隐藏
const ellipsis = (WrappedComp) => {
  return styled(WrappedComp) `
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({lc}) => lc || 1 };
    -webkit-box-orient: vertical;
  `
}

export default ellipsis