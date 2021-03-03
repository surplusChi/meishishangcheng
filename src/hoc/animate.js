import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'

const useAnimate = (WrappedComp) => {
  return class extends Component {
    render() {
      let {match} = this.props
      let pathname = this.props.location.pathname
      return (
        <CSSTransition
          in={!!match}
          timeout={1000}
          classNames={{
            enter: "animate__animated",
            enterActive: pathname ==="/list" || pathname ==="/detail" ? "animate__slideInRight" : "animate__slideInLeft",
            exit: "animate__animated",
            exitActive: pathname ==="/list" || pathname ==="/detail" ?  "animate__slideOutLeft" : "animate__slideOutRight"
          }}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComp {...this.props}></WrappedComp>
        </CSSTransition>
      )
    }
  }
}

export default useAnimate