<template>
<div class="box">
  <div>遇到不让直接跳转到第三方网址的网站？可以提交给我们。</div>
  <div class="goTo" @click="submit">去提交</div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: { },
  methods: {
    submit() {
      window.open('https://github.com/plusye/directLink/issues');
    },
  },
};
</script>

<style>
html {
  width: 200px;
  height: 110px;
  font-size: 18px;
  padding: 5px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goTo {
  font-size: 20rpx;
  background: #1CC287;
  color: #ffffff;
  padding: 8px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
