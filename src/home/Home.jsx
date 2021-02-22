import React, { Component } from 'react'
import {
  TabBar
} from 'antd-mobile' // 导入组件库方法

import cookbook from '@a/images/cookbook.png'
import cookbookActive from '@a/images/cookbook-active.png'

import cotegory from '@a/images/menu.png'
import cotegoryActive from '@a/images/menu-active.png'

import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'

import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'

import { CookBook } from './cookbook'
import {Category} from './category'
import Map from './map/Map'

export default class Home extends Component {
  state = {
    selectedTab: 'cotegory',
    hidden: false,
    fullScreen: true,
  };

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
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
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
            }}
            data-seed="logId"
          >
            <CookBook></CookBook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '23px',
                height: '23px',
                background: `url(${cotegory}) center center /  23px 23px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '23px',
                height: '23px',
                background: `url(${cotegoryActive}) center center /  23px 23px no-repeat` }}
              />
            }
            title="分类"
            key="cotegory"
            selected={this.state.selectedTab === 'cotegory'}
            onPress={() => {
              this.setState({
                selectedTab: 'cotegory',
              });
            }}
            data-seed="logId1"
          >
            <Category></Category>
          </TabBar.Item>
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
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <Map></Map>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: moreActive }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <div>444</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
