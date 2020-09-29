<template>
  <div>
    <headers />
    <div class="container">
      <div class="wrap">
        <main class="s-main">
          <nuxt />
        </main>
        <side />
      </div>
    </div>
    <footers />
  </div>
</template>

<script>
import Headers from '~/components/header.vue'
import Footers from '~/components/footer.vue'
import Side from '~/components/side.vue'

export default {
  components: {
    Headers,
    Footers,
    Side
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.wrap {

  @media #{$pc} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 20px;
    width: 1200px;
  }
}
.s-main {
  width: 100%;
  padding: 0 15px;

  @media #{$pc} {
    width: 820px;
    padding: 0;
  }
}

</style>
