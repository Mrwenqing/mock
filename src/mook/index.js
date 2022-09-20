import Mock from "mockjs";
// console.log(Moc);
// const data=Mook.mock({
//     'string/1-4':'哎呀!'
// })
// const data = Mock.mock({
//     string:'@cword(3,10)'
// })
// const data = Mock.mock({
//     title:'@ctitle(5,10)',
//     sentence:'@csentence',

// })
const data = Mock.mock({
  "memberList|2-6": [
    // Array, 随机生成数组中的元素 2到5 个
    {
      "id|+1": 1, // Number, 自增 1
      "name|1-3": "小梦", // String, 随机生成 1到3个重复`小梦`
      "phone|11": "8", // String, 生成 11 个 8
      "age|1-120": 1, // Number, 随机生成 1到120
      "salary|6000-8000.1-3": 0, // Number, 随机生成6000到8000, 有随机小数1到3位
      "status|1": true, // Boolean, 生成 true 或 false 概率都是 1/2
      "open|2-4": true, // Boolean, 生成 true 概率 2/(2+4), false 概率 4/(2+4)
      "order|2": { id: 1, name: "订单1", price: 68.8 }, // 随机取对象中的2个属性
      "order2|2-3": { id: 1, name: "订单2", price: 68.8 }, //对象中的2到3个属性
      'idCard': /\d{15}|\d{18}/, // 随机生成身份证号, 注意:正则表达式没有单引号 ''
      'Image': "@image('100X100', '#f6060','mook.js')", //图片 ('大小'，'颜色','内容')
      'entryDate': "@date('yyyy/MM/dd')", //年月日
      'createDate1': "@datetime('yyyy/MM/dd HH:mm:ss')", //年月日时分秒
      'address': "@county(true)", //地址省市区
      'zipcode': "@zip", //邮政编码
      'area': "@region", //地区 华南 华中 华北 东南 西南
      'ip': "@ip", //ip地址
      'email': "@email", //邮箱
      'domain': "@domain", //域名
      'link': "@url('http')", //http开头url
      'username': "@cname",//中文名字
    },
  ],
});
console.log(data);
