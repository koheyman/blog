<template>
  <div class="c-article-cards">
    <card v-for="content in contents" :key="content.id" :content="content"></card>
  </div>
</template>

<script>
import Headers from '~/components/header.vue'
import List from '~/components/List.vue'
import Card from '~/components/Card.vue'
import axios from 'axios'

export default {
  components: {
    Headers,
    List,
    Card
  },
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://oipon.microcms.io/api/v1/posts',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
      }
    )
    console.log(data)
    return data
  }

}

</script>

<style lang="scss" scoped>

</style>
