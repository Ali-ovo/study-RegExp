// // replace 没有全局匹配 只匹配一次！
// // replace 搭配 正则
// var str = "JAvascriptjj",
//   reg = /j/g;
// var str1 = str.replace(reg, "+");

// // xxyy -> yyxx
// var str = "aabbccdd",
//   reg = /(\w)\1(\w)\2/g;
// var str1 = str.replace(reg, function ($1, $1, $2) {
//   return $2 + $2 + $1 + $1;
// });

// // js-ts-ts ->jsTsTs
// var str = "js-ts-ts",
//   reg = /-(\w)/g;
// var str1 = str.replace(reg, function ($, $1) {
//   return $1.toUpperCase();
// });

// // jsTsTs -> js_ts_ts
// var str = "jsTsTs",
//   reg = /([\W])/g;
// var str1 = str.replace(reg, function ($, $1) {
//   return "_" + $1.toLowerCase();
// });

// // xxyyzz -> XxYyZz
// const str = "aabbcc",
//   reg = /(\w)\1/g;
// const str1 = str.replace(reg, ($, $1) => {
//   return $1.toUpperCase() + $1;
// });

// // aabbcc => a$b$c$ => 不使用function
// const str = "aabbcc",
//   reg = /(\w)\1/g;
// const str1 = str.replace(reg, "$1$");

// // aaaaabbbcccccc -> abc
// const str = "aaaaabbbcccccc",
//   reg = /(\w)\1*/g;

// const str1 = str.replace(reg, "$1");

// // 10000000000 -> 1,000,000,000,000
// const str = '1000000000000'
// // const str1 = str.split('').reverse().join('').replace(/(\d{3}\B)/g, '$1,').split('').reverse().join('')
// const str1 = str.replace(/(?=(\B)(\d{3})+$)/g, ',')

// // 日期格式 20210101 -> 2021-01-01
// const str = "20210101",
//   reg = /^(\d{4})(\d{2})(\d{2})$/;
// str1 = str.replace(reg, "$1-$2-$3");

// // 身份证认证
// const str = "20012320000130663x",
//   reg =
//     /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[1-9Xx]$/;
// const str1 = reg.test(str)

// // 手机号加密
// const str = "13823445678",
//   reg = /(1\d{2})(\d{5})(\d{3})/;
// const str1 = str.replace(reg, "$1****$3");

// //  ^$telephone$^ => telephone
// let str = "^$telephone$^",
//   reg = /^(\^)(\$)(.*?)(\2\1)$/g;
// const str1 = str.replace(reg, (reg, $1, $2, $3) => $3);
