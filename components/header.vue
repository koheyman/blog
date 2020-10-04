<template>
  <header class="header">
    <div class="header-inner">
      <div class="header-title"><a href="/">WEB FRONTEND BLOG</a></div>
      <h1 class="header-description">フロントエンドでなんとかがんばっていくブログ</h1>
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
}
.header-inner {
  padding: 0 15px;

  @media #{$pc} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    width: 1200px;
    margin: 0 auto;
  }

}
.header-description {
  display: none;
  font-size: 12px;
  font-weight: normal;

  @media #{$pc} {
    display: block;
    margin-left: 20px;
  }
}
.header-title {
  padding: 0;
  line-height: 1.5;

a {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;

    @media #{$pc} {
      font-size: 24px;
    }
  }
}
.header-nav {

  @media #{$pc} {
    margin-left: auto;
  }

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