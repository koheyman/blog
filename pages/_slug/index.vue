<template>
  <div>
    <div class="head">
      <div class="head-inner">
        <h1 class="title"><span class="category"><span>{{ category && category.name }}</span></span>{{ title }}</h1>
        <div class="head-meta">
          <div class="publishedAt"><CalendarIcon /><span v-text="$dayjs(`${publishedAt}`).format('YYYY/MM/DD')" class="date"></span></div>
          <div class="updatedAt" v-show="$dayjs(`${publishedAt}`).format('YYYY/MM/DD') != $dayjs(`${updatedAt}`).format('YYYY/MM/DD')"><UpdateIcon /><span v-text="$dayjs(`${updatedAt}`).format('YYYY/MM/DD')" class="date"></span></div>
        </div>
      </div>
    </div>
    <div class="l-wrap">
      <main class="l-main">
        <div class=" l-article">
          <div class="mainimage" v-show="noimage != true"><img :src="mainimage.url" alt=""></div>
          <div class="toc">
            <div class="toc_inner">
              <div class="toc_title"><span class="toc_icn"><ListIcon /></span>Contents</div>
              <ul class="toc_list">
                <li :class="`toc_item ${item.name}`" v-for="item in toc" :key="item.id">
                  <n-link v-scroll-to="`#${item.id}`" to>
                    {{ item.text }}
                  </n-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="post" v-html="body"></div>
        </div>
        <share :title="title" />
      </main>
      <side />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Headers from '~/components/header.vue'
import Side from '~/components/side.vue'
import Share from '~/components/share.vue'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import ListIcon from '@/assets/img/icn/icn_list.svg'
import CalendarIcon from '@/assets/img/icn/icn_calendar.svg'
import UpdateIcon from '@/assets/img/icn/icn_update.svg'
// import Meta from '~/mixins/meta'

export default {
  components: {
    Side,
    Share,
    ListIcon,
    CalendarIcon,
    UpdateIcon,
    Headers
  },
  // mixins: [Meta],
  // data: () => ({
  //   meta: {
  //     title: this.pagetitle,
  //     description: '{料金ページの説明}',
  //     path: '/price/',
  //     ogImage: '{料金ページのOGP画像のパス}'
  //   }
  // }),
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        `https://oipon.microcms.io/api/v1/posts/${params.slug}`,
        {
          headers: { 'X-API-KEY': 'e885d50d-8291-48d1-9664-d5cbbc4c3982' }
        }
      )
      const $ = cheerio.load(data.body)
      $('pre code').each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text())
        $(elm).html(result.value)
        $(elm).addClass('hljs')
      })
      const headings = $('h1, h2, h3').toArray()
      const toc = headings.map(data => ({
        text: data.children[0].data,
        id: data.attribs.id,
        name: data.name
      }))
      return {
        ...data,
        toc,
        body: $.html()
      }
    } catch(err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  },
  head(){
    const title = this.title ? `${this.title} - WEB FRONTEND BLOG` : 'WEB FRONTEND BLOG'
    const url = `https://oi-tech.blog/${this.id}`
    return {
      meta: [
        //{ name: 'description', content: description },
        { hid: 'ogType', property: 'og:type', content: 'article' },
        { hid: 'ogTitle', pproperty: 'og:title', content: title },
        ///{ property: 'og:description', content: description },
        { hid: 'ogUrl', property: 'og:url', content: url },
        { hid: 'ogImage', property: 'og:image', content: this.mainimage.url },
        { hid: 'twitterUrl', name: 'twitter:url', content: url },
        { hid: 'twitterTitle', name: 'twitter:title', content: title },        
        {
          hid: 'twitterImage',
          name: 'twitter:image:src',
          content: this.mainimage.url
        }
      ]
    }
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
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  @media #{$pc} {
    padding: 50px 0 20px;
  }
}
.head-inner {
  padding: 0 20px;
  width: 1000px;
  text-align: center;
}
.title {
  display: inline-block;
  text-align: left;
  max-width: 800px;
  margin: 0 0 20px;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.4;

  @media #{$pc} {
    font-size: 26px;
  }
}
.category {
  display: block;
  margin-bottom: 15px;
  line-height: 1;

  span {
    border-radius: 14px;
    padding: 5px 10px;
    color: #fff;
    background-color: #00c58e;
    background-color: #63b3ed;
    font-size: 13px;
    line-height: 13px;
  }
}
.head-meta {
  display: flex;
  justify-content: center;
  align-items: center;
}
.publishedAt, .updatedAt {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  color: #757575;
  font-size: 15px;
  line-height: 15px;
}
.date {
  padding-left: 7px;
  background-size: 16px 16px;
  background-position: 0 50%;
  background-repeat: no-repeat;
  color: #757575;
}
.mainimage {
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
}
.toc {
  padding: 0;

  @media #{$pc} {
    padding: 0 40px;
  }
}
.toc_inner {
  margin: 3em 0;
  border-top: 4px solid #b0d3f9;
  padding: 15px;
  background-color: #f9f9f9;

  @media #{$pc} {
    margin: 5em 0;
    padding: 20px 30px;
  }
}
.toc_title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;

  @media #{$pc} {
    margin-bottom: 20px;
  }
}
.toc_list {
  list-style: none;

  li {
    position: relative;
    padding-left: 30px;

    &::before {
      position: absolute;
      content: '';
      top: calc(50% - 3px);
      left: 10px;
      width: 6px;
      height: 6px;
      background-color: #b0d3f9;
      border-radius: 3px;
    }
  }
}
.toc_icn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  background-color: #b0d3f9;
  color: #fff;

  /deep/ svg {
    width: 20px;
    height: 20px;
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

  /deep/ ul {
    margin-left: 20px;
    list-style-type: disc;
    list-style-position: inside;
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

  /deep/ code {
    border-radius: 2px;
    padding: .2rem .4rem;
    background: #ddd;
  }

  /deep/ img {
    width: auto;
    max-width: 100%;
    height: auto;
    text-align: center;
  }

  /deep/ a {
    color: #63b3ed;
    text-decoration: underline;
  }
}
</style>