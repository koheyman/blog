<template>
  <footer class="footer">
    <div class="footer-inner">
    </div>
    <p class="footer-copy">
        &copy; 2020 OIPON FRONTEND BLOG.
      </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
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
.footer-copy {
  font-size: 12px;
}
</style>