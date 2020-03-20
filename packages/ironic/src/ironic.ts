import { AbstractStore, VuexStore } from './store'
export { AbstractStore, VuexStore }

export class IronicCore {
  constructor() {
  }

  setStore<S>(store: AbstractStore<S>) {
    this.use((self) => {
      Object.defineProperty(self, '$store', {
        get() {
          return store
        }
      })
    })
  }

  use(middleware: (self: this) => void) {
    middleware(this)
  }
}

export interface ActionPayload {
  type: string,
  data: any
}

export type IronicModelConstructor<T> = new (core: IronicCore) => T

export abstract class AbstractModel {
  constructor(protected core: IronicCore) {
  }
  public action(payload: ActionPayload) {
    console.debug('[IronicModel] action', payload)
    this.reduce(payload)
  }
  public abstract sync(): void|Promise<void>
  public abstract getState<S>(): S
  protected abstract reduce(payload: ActionPayload): void;
}

export class IronicModelBundler {
  protected core: IronicCore
  private models: Map<string, AbstractModel> = new Map()

  constructor(core: IronicCore) {
    this.core = core
  }

  add<T extends AbstractModel>(Model: IronicModelConstructor<T>) {
    const name = Model.name
    if (this.models.get(name)) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`[ironic] model "${name}" already exists.`)
      }
      return
    }
    console.log(new Model(this.core))
    // XXX: typescriptがabstract-classに対してnewを許可しないので無理やり通す
    const model = new Model(this.core)
    this.models.set(name, model)
    console.log('[IronicModelBundler] add', model)
  }

  get<T extends AbstractModel>(Model: IronicModelConstructor<T>) {
    return this.models.get(Model.name)
  }

  action(payload: ActionPayload) {
    console.debug('[IronicModelBundler] action', payload)
    this.models.forEach((model) => {
      console.log(model)
      model.action(payload)
    })
  }
}

export class Test {
  constructor(private name: string) {}
  getName() { return this.name }
}


export class Ironic {
  constructor(
    public readonly core: IronicCore,
    public readonly models: IronicModelBundler
  ) {
  }

  action(payload: ActionPayload) {
    console.debug('[Ironic] action', payload)
    this.models.action(payload)
  }

  getState<M extends AbstractModel, S>(Model: IronicModelConstructor<M>) {
    const model = this.models.get(Model)
    return model ? model.getState() : null
  }

  async sync<T>(models: AbstractModel[]): Promise<T> {
    return new Promise((resolve) => resolve())
  }
}

export function createIronic() {
  const core = new IronicCore
  const bundler = new IronicModelBundler(core)
  return new Ironic(core, bundler)
}
