import React, { Component } from 'react'
import {MenuWrap} from './StyledCategory'

class Menu extends Component {
  render() {
    return (
      <MenuWrap>
        <aside>
          <ul>
            <li className="active"><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            <li><span>热门</span></li>
            
          </ul>
        </aside>
        <section>
          <ul>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
            <li>寿司</li>
          </ul>
        </section>
      </MenuWrap>
    )
  }
}

export default Menu