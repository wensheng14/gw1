var app = new Vue({
  el: '#app',
  data: {
    logoUrl: "../images/top.jpg",
    curId: 0,
    data: [
      {
        id: 1,
        path: "",
        name: "首页",
      },
      {
        id: 2,
        path: "",
        title: "服务端",
        sub: [
          {
            id: 21,
            path: "",
            name: "linux",
          },
          {
            id: 22,
            path: "",
            name: "nginx",
          },
          {
            id: 23,
            path: "",
            name: "Max",
          },
          {
            id: 24,
            path: "",
            name: "PHP",
          },
          {
            id: 25,
            path: "",
            name: "Mysql",
          },
          {
            id: 26,
            path: "",
            name: "node",
          },
        ],
      },
      {
        id: 3,
        path: "",
        name: "HTML/CSS3",
      },
      {
        id: 4,
        path: "",
        name: "JS",
      },
      {
        id: 5,
        path: "",
        title: "工具插件",
        sub: [
          {
            id: 51,
            path: "",
            name: "jQuery",
          },
          {
            id: 52,
            path: "",
            name: "Vue",
          },
        ],
      },
      {
        id: 6,
        path: "",
        name: "Java",
      },
      {
        id: 7,
        path: "",
        name: "面试题",
      },
      {
        id: 8,
        path: "",
        name: "全部随笔",
      },
      {
        id: 9,
        path: "",
        name: "联系我们",
      },
    ],
    carUrl: [
      { imgUrl: "../images/1.jpg" },
      { imgUrl: "../images/4.jpg" },
    ],
    fastUrl: [
      {
        id: 1,
        path: '',
        url: '../images/kslj01.jpg',
      },
      {
        id: 2,
        path: '',
        url: '../images/kslj03.jpg',
      },
      {
        id: 3,
        path: '',
        url: '../images/kslj01.jpg',
      },
      {
        id: 4,
        path: '',
        url: '../images/kslj03.jpg',
      },
      {
        id: 5,
        path: '',
        url: '../images/kslj01.jpg',
      },
      {
        id: 6,
        path: '',
        url: '../images/kslj03.jpg',
      },
    ],
    picData: [
      {
        id: 1,
        path: '',
        name: '冠军奖杯',
        url: '../images/pic01.jpg',
      },
      {
        id: 2,
        path: '',
        name: '冠军奖杯',
        url: '../images/pic01.jpg',
      },
      {
        id: 3,
        path: '',
        name: '冠军奖杯',
        url: '../images/pic01.jpg',
      },
      {
        id: 4,
        path: '',
        name: '冠军奖杯',
        url: '../images/pic01.jpg',
      },
    ],
    items: [{ item: "最新消息" }, { item: "技术更新" }, { item: "社会动态" }],
    contents: [
      {
        content1: {
          item: '广州现疑似疯汉拿半米长刀 武警持枪戒备',
          time: '12-1',
        },
        content2: {
          item: '美国10位前防长发公开信：不支持特朗普翻转选举结果',
          time: '12-2',
        },
        content3: {
          item: '这是美国现在最热的话题 一盘特朗普的秘密录音带',
          time: '12-3',
        },
        content4: {
          item: '点赞！这对8岁双胞胎救下3岁落水小女孩 还不留名',
          time: '12-4',
        },
        content5: {
          item: '上四个月网课 拿几十万年薪？谁制造了芯片培训的狂',
          time: '12-5',
        },
      },
      {
        content1: {
          item: '有网友爆料称拼多多女员工下班路上猝死 公司尚未回',
          time: '12-1',
        },
        content2: {
          item: '盲目追求爆款的年代 我们该有怎样的"流量',
          time: '12-2',
        },
        content3: {
          item: '改变搜寻外星人的方式，从宇宙学角度定义生命！ GIF',
          time: '12-3',
        },
        content4: {
          item: '冬季必备手袋 像江浙沪女孩取时髦经',
          time: '12-4',
        },
        content5: {
          item: '呼伦贝尔这座城市太美了 迪拜潮只有Dunk联',
          time: '12-5',
        },
      },
      {
        content1: {
          item: '深圳现疑似疯汉拿半米长刀 武警持枪戒备',
          time: '12-1',
        },
        content2: {
          item: '广州现疑似疯汉拿半米长刀 武警持枪戒备',
          time: '12-2',
        },
        content3: {
          item: '广州现疑似疯汉拿半米长刀 武警持枪戒备',
          time: '12-3',
        },
        content4: {
          item: '广州现疑似疯汉拿半米长刀 武警持枪戒备',
          time: '12-4',
        },
        content5: {
          item: '广州现疑似疯汉拿半米长刀 武警持枪戒备',
          time: '12-5',
        },
      },
    ],
    c: [
      {
        url: '../images/gg1.png',
        title: '武警持枪戒备'
      },
      {
        url: '../images/gg2.jpg',
        title: '武警持枪戒备'
      },
    ],
    conts: [
      "司机注意！长沙枫林一路路面出现塌陷，请绕行",
      "NBA五大囧之猪队友合集",
      "2020杭州马拉松高光集锦",
      "金莎粉丝后援会晒聊天辟谣",
      "张军扩：中国减贫的成功之道何在",
      "农业高质高效发展需推动“六条链”的变革",
    ],
    roll: [
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
      "交流社区",
    ],
  },
  methods: {
    Loginclick() {
      console.log(1);
    },
    tab(index) {
      this.curId = index;
    }
  },
})

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true,//等同于以下设置

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})  