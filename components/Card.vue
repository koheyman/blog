<template>
  <article class="c-article-card">
    <div class="c-article-card__inner">
      <nuxt-link :to="`/${Content.id}`">
        <div class="c-article-card__thumb">
          <img :src="Content.mainimage.url" alt="">
        </div>
        <div class="c-article-card__overview">
            <div class="c-article-card__head">
              <span class="c-article-card__date" v-text="$dayjs(`${Content.publishedAt}`).format('YYYY/MM/DD')"></span>
            </div>
            <div class="c-article-card__title"><h2>{{ Content.title }}</h2></div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>
<script>
export default {
  props:{
    Content: {
      type: Object
    }
  },}
</script>
