<template>
  <div>
    <div class="category"># {{category}}</div>
    <div class="l-wrap">
      <main class="l-main">
        <div v-if="items.length == 0" class="noitem">まだ記事がありません。</div>
        <div class="c-article-cards">
          <card v-for="item in items" :key="item.id" :content="item"></card>
        </div>
      </main>
      <side />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import axios from 'axios'
import Side from '~/components/side.vue'

export default {
  components: {
    Side,
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
      items: data.contents,
      category: params.id
    };
  }

}
</script>
<style lang="scss" scoped>
.noitem {
  margin: 50px 0;
  text-align: center;
}
.category {
  margin: 0 auto;
  padding-top: 20px;
  width: 1200px;
  font-size: 24px;
  font-weight: bold;
}
</style>