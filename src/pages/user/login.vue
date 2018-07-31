<template>
  <div class="container">
    <div class="logo"><img src="../../assets/img/common/logo.png"></div>
    <form action="">
      <div class="form-item">
        <h4>手机号</h4>
        <div class="input-item"><input type="tel" v-model="mobile" maxlength="11"></div>
      </div>
      <div class="form-item">
        <h4>验证码</h4>
        <div class="input-item">
          <input type="tel" v-model="smsCode" maxlength="4" placeholder="填写收到的验证码">
          <div class="border-btn"><a href="javascript:;" class="btn" :class="{'disabled': isSend}" @click="gainSmsCode">{{btnLabel}}</a></div>
        </div>
      </div>
      <div class="form-item">
        <p class="tips">若您的手机号未注册，登录后将自动注册帐号</p>
      </div>
      <div class="form-item">
        <div class="btn-box">
          <a href="javascript:;" class="btn" @click="login">登录</a>
        </div>
      </div>
    </form>
    <div class="agreement">
      <p>登录即表示您已了解并同意《会员服务协议》和《会员隐私政策条款》</p>
    </div>
  </div>
</template>
<script>
  import Base from '@/assets/js/base.js'

  export default {
    name: 'Login',
    data() {
      return {
        mobile: '',
        smsCode: '',
        isSend: false,
        btnLabel: '获取验证码'
      }
    },
    methods: {
      gainSmsCode() {
        if(this.isSend) {
          return;
        }
        Base.secondCountDown(60, (flag, time) => {
          if(flag) {
            this.isSend = true;
            this.btnLabel = time + ' 秒';
          } else {
            this.isSend = false;
            this.btnLabel = '重新获取';
          }
        });
      },
      login() {
        this.$router.push({path: '/user/basic/'});
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    background: url(../../assets/img/pages/bg_login.png) top center no-repeat;
    background-size: contain;
    .logo {
      text-align: center;
      padding-top: 50px;
      img {
        width: 200px;
        height: 200px;
        vertical-align: middle;
      }
    }
    form {
      margin: 65px 75px 0;
      .form-item {
        margin-bottom: 30px;
        h4 {
          font-size: 36px;
          color: #fff;
        }
        .input-item {
          position: relative;
          input {
            width: 100%;
            background-color: transparent;
            border: none;
            height: 130px;
            line-height: 86px;
            font-size: 72px;
            border-bottom: 1px solid #96cda2;
            color: #fff;
            font-family: dinFont;
            &::-webkit-input-placeholder {
              font-size: 36px;
            }
          }
          .border-btn {
            position: absolute;
            bottom: 30px;
            right: 0;
            a.btn {
              display: block;
              width: 160px;
              height: 60px;
              line-height: 60px;
              color: #fff;
              font-size: 24px;
              text-align: center;
              border: 1px solid #fff;
              border-radius: 50px;
              text-decoration: none;
              &.disabled {
                background-color: #ccc;
                border-color: #ccc;
              }
            }
          }
        }
        .tips {
          font-size: 24px;
          color: #fff;
        }
        .btn-box {
          margin-top: 80px;
          a.btn {
            display: block;
            width: 590px;
            height: 90px;
            text-align: center;
            line-height: 90px;
            font-size: 36px;
            color: #f3f3f3;
            border-radius: 50px;
            background-color: rgba(255, 255, 255, .5);
            text-decoration: none;
          }
        }
      }
    }
    .agreement {
      position: fixed;
      bottom: 90px;
      left: 0;
      right: 0;
      p {
        margin: 0 135px;
        font-size: 24px;
        line-height: 33px;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>