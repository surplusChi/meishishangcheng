import styled from 'styled-components'

const DetailWrap = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%
  }
  .details {
    background-color: #fff;
    height: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: .2rem;
    }
    h3 {
      font-weight: normal;
      font-size: .12rem;
      margin: .1rem 0;
    }
    button {
      width: 1.3rem;
      height: .44rem;
      background-color: #ee742f;
      border: 0;
      border-radius:.06rem;
      color: #fff;
      font-size: .16rem;
    }
  }
`

export {
  DetailWrap
}