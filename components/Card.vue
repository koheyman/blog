<template>
  <article class="c-article-card">
    <div class="c-article-card__inner">
      <nuxt-link :to="`/${content.id}/`">
        <div class="c-article-card__thumb">
          <img :src="content.mainimage.url" alt="">
        </div>
        <div class="c-article-card__overview">
            <div class="c-article-card__head">
              <span class="c-article-card__category">{{ content.category && content.category.name }}</span>
              <div class="publishedAt">
                <CalendarIcon />
                <span class="c-article-card__date" v-text="$dayjs(`${content.publishedAt}`).format('YYYY/MM/DD')"></span>
              </div>
              <div class="updatedAt" v-if="$dayjs(`${content.publishedAt}`).format('YYYY/MM/DD') != $dayjs(`${content.updatedAt}`).format('YYYY/MM/DD')">
                <UpdateIcon />
                <span class="c-article-card__date" v-text="$dayjs(`${content.updatedAt}`).format('YYYY/MM/DD')"></span>
              </div>
            </div>
            <div class="c-article-card__title"><h2>{{ content.title }}</h2></div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>
<script>
import CalendarIcon from '@/assets/img/icn/icn_calendar.svg'
import UpdateIcon from '@/assets/img/icn/icn_update.svg'

export default {
  components: {
    CalendarIcon,
    UpdateIcon
  },
  props:{
    content: {
      type: Object
    }
  },}
</script>
<style lang="scss" scoped>
.publishedAt {
  display: flex;
  align-items: center;
  color: #757575;
  font-size: 15px;
  line-height: 15px;
}
.updatedAt {
  display: flex;
  align-items: center;
  color: #757575;
  font-size: 15px;
  line-height: 15px;
}
</style>
