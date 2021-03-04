import ClassState from "react-class-state"
class CountState extends ClassState {
  count = 0
}

const countState = new CountState()

countState.subscribeState((currentState, previousState) => {
  console.log({ currentState })
  console.log({ previousState })
  // This will re-render only once and whatever you change here will also change the React Component State
  // Don't use setState here if you don't want a stackoverflow
  currentState.count--
})

countState.setState((state) => {
  state.count++
})
