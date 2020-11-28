<template>
  <div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  methods: {
    isZhihu() {
      if (document.domain === 'link.zhihu.com') {
        console.log(document.URL.indexOf('target='));
        const url = document.URL.slice(document.URL.indexOf('target=') + 7);
        console.log(decodeURIComponent(url));
        window.location.href = decodeURIComponent(url);
      }
    },

    isJianshu() {
      if (document.URL.indexOf('jianshu.com') > 0 && document.URL.indexOf('go-wild') > 0) {
        console.log(document.URL.indexOf('url='));
        const url = document.URL.slice(document.URL.indexOf('url=') + 4);
        console.log(decodeURIComponent(url));
        window.location.href = decodeURIComponent(url);
      }
    },

    isQQDocs() {
      if (document.URL.indexOf('docs.qq.com') > 0 && document.URL.indexOf('scenario/link.html') > 0) {
        console.log(document.URL.indexOf('url='));
        const url = document.URL.slice(document.URL.indexOf('url=') + 4);
        console.log(decodeURIComponent(url));
        window.location.href = decodeURIComponent(url);
      }
    },
  },
  created() {
    // console.log('yejia', document.URL, document.domain);
    this.isZhihu();
    this.isJianshu();
    this.isQQDocs();
  },
  show() {
  },
};
</script>

<style>
</style>
