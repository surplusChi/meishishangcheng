const changeSelectedTab = (selectedTab) => {
  return {
    type: 'changeSelectedTab',
    selectedTab
  }
}

const changeCateType = (cateType) => {
  return {
    type: 'changeCateType',
    cateType
  }
}

const changeCateAside = (cateAside) => {
  return {
    type: 'changeCateAside',
    cateAside
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  changeSelectedTab,
  changeCateType,
  changeCateAside
}