<template>
  <div>
    <div class="category"><span>{{ category && category.name }}</span></div>
    <h1 class="title">{{ title }}</h1>
    <div class="publishedAt" v-text="$dayjs(`${publishedAt}`).format('YYYY/MM/DD')"></div>
    <div class="mainimage"><img :src="mainimage.url" alt=""></div>
    <div class="post" v-html="body"></div>
  </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'
import Headers from '~/components/header.vue'

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
<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;
  width: 1200px;
}
.title {
  margin: 15px 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.4;
}
.category {
  span {
    border-radius: 10px;
    padding: 5px 10px;
    color: #fff;
    background-color: #00c58e;
    font-size: 13px;
    line-height: 13px;
  }
}
.publishedAt {
  margin-bottom: 8px;
  text-align: right;
  color: #757575;
  font-size: 14px;
  line-height: 14px;
}
.mainimage {
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
}

.post {
  /deep/ h1 {
    position: relative;
    margin: 80px 0 40px;
    padding-bottom: 5px;
    font-size: 24px;
    border-bottom: 2px solid #f0f1f2;

    &::after {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 2px;
      width: 200px;
      background: #63b3ed;
      content: "";
    }
  }

  /deep/ h2 {
    position: relative;
    margin: 40px 0 40px;
    font-size: 24px;
    padding-left: 25px;

    &::after {
      display: block;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      border-radius: 3px;
      background-color: #63b3ed;
    }
  }

  /deep/ h3 {
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
  }

  /deep/ p {
    margin: 2em 0;
    line-height: 1.8;
  }

  /deep/ strong {
    background: linear-gradient(transparent 60%, #ff6 60%);
  }

  /deep/ pre {
    overflow: scroll;
    margin-top: 20px;
    font-family: 'Courier', monospace;
    font-size: 13px;
  }

  /deep/ pre code {
    display: block;
    overflow-x: auto;
    border-radius: 4px;
    padding: 15px;
    background: #282c34;
    color: white;
  }
}
</style>