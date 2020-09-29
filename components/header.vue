<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="header-description">なんとかフロントエンドでがんばっていくブログ</h1>
      <div class="header-title"><a href="/">WEB FRONTEND BLOG</a></div>
      <nav class="header-nav">
        <div class="header-nav-inner">
          <ul class="header-nav-list">
            <li><a href="/">HOME</a></li>
            <li><a href="/category/web">Web制作</a></li>
            <li><a href="/category/javascript">Javascript</a></li>
            <li><a href="/category/wordpress">WordPress</a></li>
            <li><a href="/category/life">Life</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  text-align: center;

  &:before {
    position: fixed;
    content: "";
    top: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(96deg, #08909e, #1b79ad);
    z-index: 11;
  }
}
.header-inner {
  padding: 0 15px;

  @media #{$pc} {
    padding: 0;
  }

}
.header-description {
  font-size: 12px;
  font-weight: normal;
}
.header-title {
  padding: 0 0 5px;
  line-height: 1.5;

a {
    font-size: 20px;
    font-weight: bold;

    @media #{$pc} {
      font-size: 24px;
    }
  }
}
.header-nav {

}
.header-nav-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    margin: 0 5px;
    font-size: 14px;

     @media #{$pc} {
       margin: 0 10px;
       font-size: 16px;
     }
  }
}
</style>