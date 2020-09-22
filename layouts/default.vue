<template>
  <div>
    <headers />
    <div class="container">
      <div class="wrap">
        <nuxt />
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.wrap {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;
  width: 1200px;
}

</style>
