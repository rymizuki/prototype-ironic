<template>
  <div>
    <input type="text" v-model="input.name" /><button
      type="button"
      @click="submit"
    >
      submit
    </button>
  </div>
</template>

<script>
export default {
  async asyncData({ $ironic }) {
    const data = await $ironic.sync([$ironic.models.name])
    return data
  },
  data() {
    return {
      input: { name: null }
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
