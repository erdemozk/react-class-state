import React, { useReducer } from "react"

export class ClassState {
  private force: React.DispatchWithoutAction | undefined

  public setState(setter: (state: this) => void) {
    setter(this)
    this.updateState()
  }

  public getState(): this {
    const [, force] = useReducer((c) => c + 1, 0)
    this.force = force
    return this
  }

  public watchState() {
    const [, force] = useReducer((c) => c + 1, 0)
    this.force = force
  }

  private updateState() {
    this.force && this.force()
  }
}

// You can use whichever you want as export
export default ClassState
