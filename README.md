# prototype-ironic

VueとVuexの間に立って、fluxの一方向データフローを実現する、窓口となるフレームワークの試作

## Synopsis

```js
// nuxt.config.js
module.exports = {
  modules: ['@nuxtjs/axios', 'nuxt-ironic'],
  plugins: ['~/plugins/ironic'],
}
```

```js
// plugins/ironic

import { TodoModel } from '~/models/todo'
import { TodoRowModel } from '~/models/todo-row'

export default ({ $axios, $store, $ironic }) => {
  // axiosのインスタンスを取り込み
  $ironic.setClient($axios)

  // ストアの取り込み
  $ironic.setStore($store)

  // modelを登録する
  $ironic.addModel('todo', TodoModel)
  $ironic.addModel('todo_row', TodoRowModel)
}
```

```js
// pages/index.vue
import { TodoModel } from '~/models/todo'
import { TodoRowModel } from '~/models/todo-row'

export default {
  async fetch({ $ironic }) {
    await $ironic.sync([
      TodoModel,
      TodoRowModel
    ])
  },
  computed: {
    todo_list() {
      return this.$getState(TodoModel)
    },
    todo_row() {
      return this.$getState(TodoRowModel)
    }
  },
  mounted() {
    this.$action('index:mounted')
  },
  methods: {
    selectRow(row) {
      this.$action('index:select_row', { id: row.id })
    }
  }
}
```

```js
// models/todo

import { AbstractModel } from 'ironic'

export class TodoModel extends AbstractModel {
  async sync() {
    await this.fetchList()
  }
  subscribe() {
    this.on('index:mounted', async () => {
      await this.fetchList()
    })
  }
  getState() {
    return this.$store.getters['todo_list']()
  }
  private fetchList() {
    this.$store.commit('loading/start')
    const { data } = await this.$axios(`/api/todo`)
    this.$store.commit('todo/receive', data)
    this.$store.commit('loading/end')
  }
}
```

## 原則

- Viewにロジックを書かない
- Viewから命令を出さない
- 依存の順序を守る
  - ViewはStoreの変更を監視し
  - StoreはDispatcherの通知を監視し
  - DispatcherはViewのイベントを監視する

## 展望

- Storeは抽象化してVuexに限定しないような構造にしたい
- 型をActionとStateに適応したい
