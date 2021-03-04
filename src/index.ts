import React, { useReducer } from "react"

type GetStateSettings = {
  vanilla?: boolean
}
type StateSubscriber<T> = (currentState: T, previousState: T) => void

export class ClassState {
  public count = 5
  private force: React.DispatchWithoutAction | undefined
  private subscribers = new Set<StateSubscriber<this>>()

  public async setState(setter: (state: this) => Promise<void> | void): Promise<void> {
    const previousState = { ...this }
    await setter(this)
    const currentState = this
    this.subscribers.forEach((sub) => sub(currentState, previousState))
    this.updateState()
  }

  public getState(settings: GetStateSettings = {}): this {
    if (!settings.vanilla) this.initForce()
    return this
  }

  public watchState(): void {
    this.initForce()
  }

  public subscribeState(subscriber: StateSubscriber<this>): StateSubscriber<this> {
    this.subscribers.add(subscriber)
    return subscriber
  }

  private initForce(): void {
    const [, force] = useReducer((c) => c + 1, 0)
    this.force = force
  }

  private updateState(): void {
    this.force && this.force()
  }
}

// You can use whichever you want as export
export default ClassState
