import styled from 'styled-components'

const CategoryWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: .44rem;
    background-color: #ee742f;
    ul {
      position: relative;
      width: 1.4rem;
      height: .3rem;
      display: flex;
      border: 1px solid #fff;
      border-radius: .15rem;
      li {
        flex: 1;
        line-height: .3rem;
        text-align: center;
        color: #fff;
        transition: all 100ms ease-in;
        &.active {
          color: #ee742f;
          z-index: 3;
        }
        &.slide {
          left: 0;
          position:absolute;
          width: .7rem;
          height: .3rem;
          background-color: #fff;
          border-radius: .15rem;
          z-index: 2;
        }
        &.slide.right {
          left: .7rem;
        }
      }
    }
  }
`
const MenuWrap = styled.div `
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
  CategoryWrap,
  MenuWrap
}
 