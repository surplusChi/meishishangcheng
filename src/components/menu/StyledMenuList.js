import styled from 'styled-components'

const MenuWrap = styled.div `
  border-top: 1px solid #ccc;
  overflow: hidden;
  flex: 1;
  display: flex;
  aside {
    overflow-y: scroll;
    width: .9rem;
    ul {
      li {
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        &.active {
          background-color: #fff;
          color: #ee742f;
          span{
            display: inline-block;
            height: 100%;
            border-bottom: 1px solid #ee742f;
          }
        }
      }
    }
  }
  section {
    overflow-y: scroll;
    flex: 1;
    padding: .25rem;
    background-color: #fff;
    ul{
      display: flex;
      flex-wrap: wrap;
      li {
        text-align: center;
        width: 33.3333333333%;
        height: .45rem;
      }
    }
  }
`
export {
  MenuWrap
}
 