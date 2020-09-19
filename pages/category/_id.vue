<template>
  <div class="container u-bg-gray">
    <headers />
    <main class="wrap">
      <div>カテゴリ</div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <nuxt-link :to="`/${item.id}`">
           {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Headers from '~/layouts/header.vue'
import axios from 'axios'

export default {
  components: {
    Headers
  },

  data() {
    return {
      items: []
    };
  },

  async asyncData({ params }) {
    console.log(params)
    const { data } = await axios.get(
      `https://oipon.microcms.io/api/v1/posts?filters=category[equals]${params.id}`,
      {
        headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
      }
    );
    console.log(data.contents)

    return {
      items: data.contents
    };
  }

}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.wrap {
  margin: 0 auto;
  width: 1040px;
}

</style>
