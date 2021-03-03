import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TabBar
} from 'antd-mobile' // 导入组件库方法

import cookbook from '@a/images/cookbook.png'
import cookbookActive from '@a/images/cookbook-active.png'

import category from '@a/images/menu.png'
import categoryActive from '@a/images/menu-active.png'

import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'

import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'

import { CookBook } from './cookbook'
import {Category} from './category'
import {More} from './more'
import Map from './map/Map'

// 导入dispatch派发的方法，点击记录在分类页面
import { actionCreator as ac } from '@/home/category'
import animate from '@h/animate'

// 改造成hooks组件
const Home = (props) => {
  let dispatch = useDispatch()
  const state = useSelector(state => state)

  let [tabs, setTabs] = useState({
    // 为了从路由页面退回来，回到之前的页面，记录当前页面的值
    selectedTab: state.category.routeInfo.selectedTab,
    hidden: false,
    fullScreen: true,
  })

  const tabItmes = [          
    <TabBar.Item
      title="美食大全"
      key="cookbook"
      icon={<div style={{
        width: '26px',
        height: '26px',
        background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
      />
      }
      selectedIcon={<div style={{
        width: '26px',
        height: '26px',
        background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
      />
      }
      selected={tabs.selectedTab === 'cookbook'}
      onPress={() => {
        setTabs({
          selectedTab: 'cookbook',
        })
        // 点击分类页面，记录当前的selectedTab
        dispatch(ac.changeSelectedTab('cookbook'))
      }}
      data-seed="logId"
    >
      <CookBook></CookBook>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '23px',
          height: '23px',
          background: `url(${category}) center center /  23px 23px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '23px',
          height: '23px',
          background: `url(${categoryActive}) center center /  23px 23px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={tabs.selectedTab === 'category'}
      onPress={() => {
        setTabs({
          selectedTab: 'category',
        })
        // 点击分类页面，记录当前的selectedTab
        dispatch(ac.changeSelectedTab('category'))
      }}
      data-seed="logId1"
    >
      <Category></Category>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '24px',
          height: '24px',
          background: `url(${location}) center center /  24px 24px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '24px',
          height: '24px',
          background: `url(${locationActive}) center center /  24px 24px no-repeat` }}
        />
      }
      title="美食地图"
      key="map"
      selected={tabs.selectedTab === 'map'}
      onPress={() => {
        setTabs({
          selectedTab: 'map',
        });
      }}
    >
      <Map></Map>
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="more"
      selected={tabs.selectedTab === 'more'}
      onPress={() => {
        setTabs({
          selectedTab: 'more',
        });
      }}
    >
      <More></More>
    </TabBar.Item>
  ]

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="white"
        hidden={tabs.hidden}
      >
        {
          state.home.checked ? tabItmes.map(v => v) : tabItmes.filter((v,i) => i !== 2)
        }
      </TabBar>
    </div>
  )
}

export default animate(Home)


// @connect(
//   (state) => {
//     return {
//       // 点击更多页面开关，显示隐藏地图的状态
//       checked: state.home.checked,
//       // 点击分类页面记录，当前导航栏所在分类页面上
//       selectedTab: state.category.routeInfo.selectedTab
//     }
//   },
//   (dispatch) => {
//     return {
//       // 点击分类页面，派发一个方法，记录selectedTab
//       changeSelectedTab(selectedTab) {
//         dispatch(ac.changeSelectedTab(selectedTab))
//       }
//     }
//   }
// ) 
// @animate
// class Home extends Component {
//   state = {
//     // 为了从路由页面退回来，回到之前的页面，记录当前页面的值
//     selectedTab: this.props.selectedTab,
//     hidden: false,
//     fullScreen: true,
//   }
//   render() {
//     // console.log(this.props.selectedTab)
//     const tabItmes = [          
//       <TabBar.Item
//         title="美食大全"
//         key="cookbook"
//         icon={<div style={{
//           width: '26px',
//           height: '26px',
//           background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
//         />
//         }
//         selectedIcon={<div style={{
//           width: '26px',
//           height: '26px',
//           background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
//         />
//         }
//         selected={this.state.selectedTab === 'cookbook'}
//         onPress={() => {
//           this.setState({
//             selectedTab: 'cookbook',
//           })
//           // 点击分类页面，记录当前的selectedTab
//           this.props.changeSelectedTab('cookbook')
//         }}
//         data-seed="logId"
//       >
//         <CookBook></CookBook>
//       </TabBar.Item>,
//       <TabBar.Item
//         icon={
//           <div style={{
//             width: '23px',
//             height: '23px',
//             background: `url(${category}) center center /  23px 23px no-repeat` }}
//           />
//         }
//         selectedIcon={
//           <div style={{
//             width: '23px',
//             height: '23px',
//             background: `url(${categoryActive}) center center /  23px 23px no-repeat` }}
//           />
//         }
//         title="分类"
//         key="category"
//         selected={this.state.selectedTab === 'category'}
//         onPress={() => {
//           this.setState({
//             selectedTab: 'category',
//           })
//           // 点击分类页面，记录当前的selectedTab
//           this.props.changeSelectedTab('category')
//         }}
//         data-seed="logId1"
//       >
//         <Category></Category>
//       </TabBar.Item>,
//       <TabBar.Item
//         icon={
//           <div style={{
//             width: '24px',
//             height: '24px',
//             background: `url(${location}) center center /  24px 24px no-repeat` }}
//           />
//         }
//         selectedIcon={
//           <div style={{
//             width: '24px',
//             height: '24px',
//             background: `url(${locationActive}) center center /  24px 24px no-repeat` }}
//           />
//         }
//         title="美食地图"
//         key="map"
//         selected={this.state.selectedTab === 'map'}
//         onPress={() => {
//           this.setState({
//             selectedTab: 'map',
//           });
//         }}
//       >
//         <Map></Map>
//       </TabBar.Item>,
//       <TabBar.Item
//         icon={{ uri: more }}
//         selectedIcon={{ uri: moreActive }}
//         title="更多"
//         key="more"
//         selected={this.state.selectedTab === 'more'}
//         onPress={() => {
//           this.setState({
//             selectedTab: 'more',
//           });
//         }}
//       >
//         <More></More>
//       </TabBar.Item>
//     ]
//     return (
//       <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
//         <TabBar
//           unselectedTintColor="#949494"
//           tintColor="#000"
//           barTintColor="white"
//           hidden={this.state.hidden}
//         >
//           {
//             this.props.checked ? tabItmes.map(v => v) : tabItmes.filter((v,i) => i !== 2)
//           }
//         </TabBar>
//       </div>
//     );
//   }
// }
