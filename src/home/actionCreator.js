import { changeSwitch } from './actionTypes'

const changeChecked = (checked) => {
  return {
    type: changeSwitch,
    checked
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  changeChecked
}