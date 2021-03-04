import React, { useReducer } from "react"

export class ClassState {
  private force: React.DispatchWithoutAction | undefined

  public setState(setter: (state: this) => void) {
    setter(this)
    this.update()
  }

  public getState(): this {
    const [, force] = useReducer((c) => c + 1, 0)
    this.force = force
    return this
  }

  public watch() {
    const [, force] = useReducer((c) => c + 1, 0)
    this.force = force
  }

  private update() {
    this.force && this.force()
  }
}
