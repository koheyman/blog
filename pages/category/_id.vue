<template>
  <div>
    <div v-if="items.length == 0" class="noitem">まだ記事がありません。</div>
    <div class="c-article-cards">
      <card v-for="item in items" :key="item.id" :content="item"></card>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import axios from 'axios'

export default {
  components: {
    Card
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
<style lang="scss" scoped>
.noitem {
  margin: 50px 0;
  text-align: center;
}
</style>