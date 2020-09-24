<template>
  <main class="s-main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt" v-text="$dayjs(`${publishedAt}`).format('YYYY/MM/DD')"></p>
    <p class="category">{{ category && category.name }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'
import Headers from '~/layouts/header.vue'

export default {
  components: {
    Headers
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://oipon.microcms.io/api/v1/posts/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
      }
    )
    console.log(data)
    return data
  }
}
</script>
<style scoped>
.title {
  font-size: 22px;
  font-weight: bold;
}
</style>