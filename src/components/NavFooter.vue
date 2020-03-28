<template>
  <div class="foot">
    <div class="foot-logo">
      <img src="./../../public/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://blog.csdn.net/Govern66">小周博客</a><span>|</span>
      <a href="https://github.com/MrZHLF">小周Github</a>
    </div>
    <div class="copyright">
      Copyright ©2020
      <span class="domain">https://blog.csdn.net/Govern66</span> All Rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
.foot {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .foot-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    margin-top: 13px;
    .domain {
      color: #ff6600;
    }
  }
}
</style>
