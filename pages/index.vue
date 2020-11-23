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
import Card from '~/components/Card.vue'
import axios from 'axios'
import Side from '~/components/side.vue'

export default {
  components: {
    Side,
    Headers,
    Card
  },
  async asyncData({$config, error}) {
    try {
      const { data } = await axios.get(
        'https://oipon.microcms.io/api/v1/posts',
        {
          headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
        }
      )
      // console.log(data)
      return data
    } catch(err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  }

}

</script>

<style lang="scss" scoped>

</style>
