import React  from 'react'
import { Route, Redirect} from 'react-router-dom'

import { Home } from './home'
import List from './list/List'
import Detail from './detail/Detail'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Route path='/home' children={(props) => <Home {...props}></Home>}></Route>
//         <Route path='/list' children={(props) => <List {...props}></List>}></Route>
//         <Route path='/detail' children={(props) => <Detail {...props}></Detail>}></Route>
//         <Redirect from='/' to="/home"></Redirect>
//       </>
//     )
//   }
// }
const App = (props) => {
  return (
    <>
      <Route path='/home' children={(props) => <Home {...props}></Home>}></Route>
      <Route path='/list' children={(props) => <List {...props}></List>}></Route>
      <Route path='/detail' children={(props) => <Detail {...props}></Detail>}></Route>
      <Redirect from='/' to="/home"></Redirect>
    </>
  )
}

export default App