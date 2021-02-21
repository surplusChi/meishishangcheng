import axios from 'axios'

// 封装一个ajax请求方法
const get = ({url}) => {
  return new Promise((resolve, reject) => {
    axios({
      url
    })
    .then(result => {
      resolve(result)
    })
    .then(error => {
      reject(error)
    })
  })
}

export {
  get
}