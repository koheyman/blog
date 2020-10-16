<template>
  <aside class="s-aside">
    <section class="box">
      <h3 class="title">カテゴリー</h3>
      <div>
        <ul class="list">
          <li class="item"><a href="/category/web">Web制作</a></li>
          <li class="item"><a href="/category/javascript">Javascript</a></li>
          <li class="item"><a href="/category/wordpress">WordPress</a></li>
          <li class="item"><a href="/category/life">Life</a></li>
        </ul>
      </div>
    </section>

    <section class="box">
      <h3 class="title">about me</h3>
      <div>
        <div class="profile">
          <div class="profile-image"><img src="~/assets/img/img_profile.jpg" /></div>
          <div class="profile-name">おいぽん</div>
          <div class="profile-job">フロントエンドエンジニア・コーダー</div>
          <div class="profile-sns"><a href="https://twitter.com/oiponcom" target="blank"><TwitterIcon /></a></div>
          <div class="profile-overview">
            <p>新卒で入ったシステム開発の会社から未経験でWeb業界へ。都内のweb制作会社を2社経験し事業会社へ。webサイトのフロントエンドの実装をしています。コーダーさんと呼ばれようがなんとかフロントエンドエンジニアとしてしがみ付いてがんばっていきたい。</p>
            <p>インターネットが好きなのでインターネットになりたい。</p>
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
import TwitterIcon from '@/assets/img/icn/icn_twitter_logo_blue.svg'

export default {
  components: {
    TwitterIcon
  }
}

</script>

<style lang="scss" scoped>
.s-aside {
  width: 100%;
  padding: 20px 15px;

  @media #{$pc} {
    width: 340px;
    padding: 0;
  }
}
.box {
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
}
.title {
  position: relative;
  margin: 0 0 20px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid #f0f1f2;

  &::after {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    width: 100px;
    background: #63b3ed;
    content: "";
  }
}
.item {
  font-size: 14px;
}

.profile-image {
  margin: 30px 0 10px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
}
.profile-name {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.profile-job {
  color: #999;
  font-size: 13px;
  text-align: center;
}
.profile-sns {
  display: flex;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
  }
}
.profile-overview {
  margin-top: 20px;
  font-size: 13px;
  word-wrap: break-word;

  p {
    margin-bottom: 10px;
  }
}
</style>