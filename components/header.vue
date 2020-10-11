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
  margin-bottom: 10px;
  line-height: 1.5;

  @media #{$pc} {
    margin-bottom: 0;
  }

a {
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    padding-left: 42px;
    // background-size: 30px 30px;
    // background-position: 0 50%;
    // background-repeat: no-repeat;
    // background-image: url(~@/assets/img/icn/icn_fro.svg);

    &::after {
      position: absolute;
      content: '';
      top: calc(50% - 15px);
      left: 0;
      width: 30px;
      height: 30px;
      background: #0fc9f7;
      // background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
      background-image: linear-gradient(45deg, #005bea 0%, #00f2fe 100%);
      // background-image: linear-gradient(90deg, #00c6fb 0%, #005bea 100%);



      border-radius: 100%;
    }

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

       a {
        position: relative;

        &::after {
          position: absolute;
          content: "";
          bottom: -12px;
          left: 0;
          background-color: #4facfe;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transition: transform .25s,width .25s,height .25s,-webkit-transform .25s;
        }

        &:hover {
          &::after {
            transform: scaleX(1);
            transition: transform .25s,width .25s,height .25s,-webkit-transform .25s;
          }
        }
       }
     }
  }
}
</style>