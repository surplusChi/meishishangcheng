import React, { Component } from 'react'

import { 
  CategoryWrap 
} from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'

class Category extends Component {
  state = {
    tabIndex: 0
  }
  handleClick = (index) => {
    return () => {
      this.setState({
        tabIndex: index
      })
    }
  }
  render() {
    return (
      <CategoryWrap>
        <nav>
          <ul>
            <li 
              className={this.state.tabIndex === 0 ? 'active' : ''} 
              onClick={this.handleClick(0)}
            >分类</li>
            <li 
              className={this.state.tabIndex === 1 ? 'active' : ''} 
              onClick={this.handleClick(1)}
            >食材</li>
            <li className={this.state.tabIndex === 0 ? 'slide' : 'slide right'}></li>
          </ul>
        </nav>
        <Search
          outerbg="#fff"
          innerbg="#efefef"
          hasborder={false}
        ></Search>
        <Menu></Menu>
      </CategoryWrap>
    )
  }
}

export default Category