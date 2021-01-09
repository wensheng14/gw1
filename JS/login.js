new Vue({
  el: '#login',
  data: {
    name: '',
    pwd: '',
    captcha: '',
    hint: '',
  },
  methods: {
    imgSrc() {
      $('.imgSrc').attr({ src: 'http://localhost/php/vaildcode.php?tmp=' + Math.random() })
    },
    Captcha() {
      $.ajax({
        type: "POST",  //默认get
        url: "http://localhost/php/captcha.php",  //默认当前页
        data: { captcha: this.captcha },  //格式{key:value}
        // dataType: "json",
        beforeSend: function () { }, //请求发送前回调,常用验证
        success: function (response) {  //请求成功回调
          if (response == 'true') {
            $(".hint").fadeIn(1000).css('color', 'green').fadeOut(4000).text('验证码正确')
          } else {
            $(".hint").fadeIn(1000).css('color', 'red').fadeOut(4000).text('验证码输入错误')
          }
        },
        error: function (e) {  //请求超时回调
          if (e.statusText == "timeout") {
            alert("请求超时")
          }
        },
        complete: function () { }, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
      })
    },
    btn() {
      let that = this;
      $.ajax({
        type: "POST",  //默认get
        url: "http://localhost/php/login.php",  //默认当前页
        data: {
          name: that.name,
          pwd: that.pwd,
        },  //格式{key:value}
        // dataType: "json",
        beforeSend: function () { }, //请求发送前回调,常用验证
        success: function (response) {  //请求成功回调
          console.log(response);
          if (response != 'success') {
            alert('登录失败！');
          } else {
            alert('登录成功！');
          }
        },
        error: function (e) {  //请求超时回调
          if (e.statusText == "timeout") {
            alert("请求超时")
          }
        },
        complete: function () { }, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
      })
      // console.log('11')
    },
    checkName() {
      let checkName = /^[0-9a-z]{4,10}$/;
      if (!checkName.test(this.name)) {
        $(".hint").fadeIn(1000).css('color', 'red').fadeOut(4000).text('用户名输入格式错误')
      } else {
        let that = this;
        $.ajax({
          type: "POST",  //默认get
          url: "http://localhost/php/Usernaem.php",  //默认当前页
          data: {
            name: this.name
          },  //格式{key:value}
          // dataType: "json",
          beforeSend: function () { }, //请求发送前回调,常用验证
          success: function (response) {  //请求成功回调
            if (response != 'success') {
              $(".hint").fadeIn(1000).css('color', 'red').fadeOut(4000).text('用户未注册')
            } else {
              $(".hint").fadeIn(1000).css('color', 'green').fadeOut(4000).text('输入正确')
            }
          },
          error: function (e) {  //请求超时回调
            if (e.statusText == "timeout") {
              alert("请求超时")
            }
          },
          complete: function () { }, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        })
      }
    },
  },
})
