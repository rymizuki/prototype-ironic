<template>
  <div>
    <p>Name: {{name}}</p>
    <input type="text" v-model="input.name" /><button
      type="button"
      @click="submit"
    >
      submit
    </button>
  </div>
</template>

<script>
import { NameModel } from '~/models/name'

export default {
  async fetch({ $ironic }) {
     await $ironic.sync([NameModel])
  },
  data() {
    return {
      input: { name: null }
    }
  },
  computed: {
    name() {
      return this.$getState(NameModel).name
    }
  },
  created() {},
  mounted() {
    console.log('mounted', this.$ironic)
    this.$action({ type: 'mounted' })
    console.log(this.name)
  },
  methods: {
    submit() {
      this.$action({ type: 'submit_name', data: { name: this.input.name } })
    }
  }
}
</script>
