<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="header-description">なんとかフロントエンドでがんばっていくブログ</h1>
      <div class="header-title"><a href="/">HAPPY FRONTEND BLOG</a></div>
      <nav class="header-nav">
        <div class="header-nav-inner">
          <ul class="header-nav-list">
            <li><a href="/">HOME</a></li>
            <li><a href="#">Web制作</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">WordPress</a></li>
            <li><a href="#">Life</a></li>
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

}
.header-description {
  font-size: 12px;
  font-weight: normal;
}
.header-title {
  padding: 0 0 10px;
  a {
    font-size: 24px;
    font-weight: bold;
  }
}
.header-nav {

}
.header-nav-list {
  display: flex;
  justify-content: center;

  li {
    margin: 0 10px;
  }
}
</style>