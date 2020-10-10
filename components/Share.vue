<template>
  <div class="share">
    <ul class="share-list">
      <li class="share-item">
        <a class="share-link" :href="'http://www.facebook.com/share.php?u=https://oi-tech.blog'" rel="nofollow" target="_blank">
          <img src="@/assets/img/btn/btn_facebook_share.svg" alt="facebook シェアボタン">
        </a>
      </li>
      <li class="share-item">
        <a class="share-link" :href="'http://twitter.com/share?url=https://oi-tech.blog&amp;text=' + title" rel="nofollow" target="_blank">
          <img src="@/assets/img/btn/btn_twitter_share.svg" alt="twitter ツイートボタン">
        </a>
      </li>
      <li class="share-item">
        <a class="share-link" :href="'http://b.hatena.ne.jp/add?mode=confirm&amp;url=https://oi-tech.blog&amp;title=' + title" rel="nofollow" 　target="_blank">
          <img src="@/assets/img/btn/btn_hatena_share.svg" alt="hatena シェアボタン">
        </a>
      </li>
      <li class="share-item">
        <a class="share-link" :href="'https://getpocket.com/edit?urlhttps://oi-tech.blog&amp;title=' + title" rel="nofollow" 　target="_blank">
          <img src="@/assets/img/btn/btn_pocket_share.png" alt="pocket ボタン">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.share {
  margin-top: 20px;
  padding:  10px 20px 20px;
  background-color: #fff;

  @media #{$pc} {
    margin-top: 30px;
    border-radius: 10px;
    padding: 20px;
  }
}
.share-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.share-item {
  margin: 0 5px;
  img {
    width: auto;
    height: 30px;
  }
}
</style>