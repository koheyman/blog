<template>
  <section class="section">
    <aside>
      <div class="lead">Share</div>
      <ul class="social-list">
        <li class="social-list-item">
          <a
            class="social-list-link icon-facebook"
            :href="facebookUrl()"
            target="_blank"
            title="Facebookで共有"
          ><i class="facebook"/></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-twitter"
            :href="twitterUrl()"
            target="_blank"
            title="Twitterで共有"
          ><i class="twitter"/></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-hatebu"
            :href="hatebuUrl()"
            target="_blank"
            :data-hatena-bookmark-title="encodeURIComponent(url)"
            title="このエントリーをはてなブックマークに追加"
          ><b>B!</b></a>
        </li>
        <li class="social-list-item">
          <a
            class="social-list-link icon-pocket"
            :href="pocketUrl()"
            target="_blank"
            title="pocketで共有"
          ><i class="pocket"/></a>
        </li>
      </ul>
    </aside>
  </section>
</template>
<script>
export default {
  name: "ShareButtons",
  props: ["title"],
  data() {
    return {
      url: `https://oi-tech.blog${this.$route.path}`,
      facebook_url: "http://www.facebook.com/share.php?u={0}",
      twitter_url: "https://twitter.com/intent/tweet?url={0}&text={1}",
      hatebu_url:
        "http://b.hatena.ne.jp/add?mode=confirm&amp;url={0}&amp;title={1}",
      pocket_url: "http://getpocket.com/edit?url={0}"
    };
  },
  methods: {
    formatByArr(msg) {
      // フォーマット（引数可変（配列）版）
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      // URLエンコード
      args = args.map(x => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k];
      });
    },
    // それぞれパラメータを埋め込む
    facebookUrl() {
      return this.formatByArr(this.facebook_url, this.url, this.title);
    },
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url, this.title);
    },
    hatebuUrl() {
      return this.formatByArr(this.hatebu_url, this.url, this.title);
    },
    pocketUrl() {
      return this.formatByArr(this.pocket_url, this.url);
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  margin-top: 20px;
  padding:  10px 20px 20px;
  background-color: #fff;

  @media #{$pc} {
    margin-top: 30px;
    border-radius: 10px;
    padding: 20px;
  }
}
.lead {
  margin: 0 0 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.social-list {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
}

.social-list-item {
  flex-grow: 1;
  height: 36px;
  line-height: 36px;
  min-width: 50px;
  text-align: center;
  margin: 0 5px;
}
.social-list-link.icon-facebook {
  background: #fff;
  border: 1px solid #1da1f2;
}
.social-list-link.icon-twitter {
  background: #fff;
  border: 1px solid #1da1f2;
}
.social-list-link.icon-hatebu {
  background: #fff;
  border: 1px solid #008fde;
  color: #008fde;
}
.social-list-link.icon-pocket {
  background: #fff;
  border: 1px solid #eb4654;
}
.social-list-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
a {
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
}
.content li + li {
  margin-top: 0;
}
.facebook {
  width: 100%;
  height: 100%;
  background-size: 20px 20px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(~@/assets/img/icn/icn_facebook_logo_blue.svg?inline);
}
.twitter {
  width: 100%;
  height: 100%;
  background-size: 30px 30px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(~@/assets/img/icn/icn_twitter_logo_blue.svg?inline);
}
.pocket {
  width: 100%;
  height: 100%;
  background-size: 20px 20px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(~@/assets/img/icn/icn_pocket_logo.svg?inline);
}
</style>