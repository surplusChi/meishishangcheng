import React, { Component } from 'react'

import {Container, InnerContainer} from './StyledSearch'

export default class Search extends Component {
  render() {
    return (
      <Container {...this.props}>
        <InnerContainer {...this.props}>
          <svg t="1613713790852" className="icon" viewBox="0 0 1024 1024" 
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1133" 
          width="200" height="200">
            <path d="M981.504 910.848l-147.456-147.456a450.304
              450.304 0 0 0 100.864-284.16C934.912 229.376 731.648 25.6 481.28 25.6S27.648
              228.864 27.648 479.232s203.264 453.632 453.632 453.632c105.472 0 202.752-36.352
              280.064-97.28l147.968 147.968c10.24 10.24 23.04 14.848 36.352 14.848s26.112-5.12 
              36.352-14.848c19.456-19.968 19.456-52.736-0.512-72.704zM130.048 479.232c0-193.536
                157.696-351.232 351.232-351.232s351.232 157.696 351.232 351.232-157.696 
                351.232-351.232 351.232-351.232-157.696-351.232-351.232z" fill="" p-id="1134">
            </path>
          </svg>
          <span>想吃什么搜这里，如川菜</span>
        </InnerContainer>
      </Container>
    )
  }
}