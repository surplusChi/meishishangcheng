import React from 'react'

import { 
  CategoryWrap,
  NavUl
} from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'

const CategoryUi = (props) => {
  // 解构出容器组件传来的属性
  const { type, onCategoryUiClick} = props
  return (
    <CategoryWrap>
      <nav>
        <NavUl
          color="#fff"
          radius={0.15}
        >
          <li 
            // 点击li根据父组件传来的type值 来判断点击的是分类还是食材
            className={type === 'category' ? 'active' : ''} 
            onClick={onCategoryUiClick('category')}
          >分类</li>
          <li 
            className={type === 'material' ? 'active' : ''} 
            onClick={onCategoryUiClick('material')}
          >食材</li>

            {/* 这个li用于点击显示的高亮样式，也是根据父组件传来的type值 进行判断显示 */}
          <li className={type === 'category' ? 'slide' : 'slide right'}></li>
        </NavUl>
      </nav>
      <Search
        outerbg="#fff"
        innerbg="#efefef"
        hasborder={false}

        radius={0.06}
      ></Search>
      <Menu
        // 给Menu组件传入一个属性
        type = {type}
      ></Menu>
    </CategoryWrap>
  )
}

export default CategoryUi
