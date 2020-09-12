<template>
  <div class="container u-bg-gray">
    <headers />
    <div>
      <h1 class="title">
        sample blog
      </h1>
      <h2 class="subtitle">
        enjoy frontend 
      </h2>
        <ul>
          <li v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">
              {{ content.title }}
            </nuxt-link>
          </li>
        </ul>

    </div>
  </div>
</template>

<script>
import Headers from '~/layouts/header.vue'
import List from '~/components/List.vue'
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Headers,
    List,
    Logo
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
    return data
  }

}

</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $subColor;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
