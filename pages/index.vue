<template>
  <div>
    <div class="l-wrap">
      <main class="l-main">
        <div class="c-article-cards">
          <card v-for="content in contents" :key="content.id" :content="content"></card>
        </div>
      </main>
      <side />
    </div>
  </div>
</template>

<script>
import Headers from '~/components/header.vue'
import List from '~/components/List.vue'
import Card from '~/components/Card.vue'
import axios from 'axios'
import Side from '~/components/side.vue'

export default {
  components: {
    Side,
    Headers,
    List,
    Card
  },
  async asyncData({$config}) {
    const { data } = await axios.get(
      'https://oipon.microcms.io/api/v1/posts',
      {
        headers: { 'X-API-KEY': $config.apiKey }
      }
    )
    // console.log(data)
    return data
  }

}

</script>

<style lang="scss" scoped>

</style>
