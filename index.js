// 正则表达式
// 机制： 采用不回头 和贪婪模式

// // n+ {1, 正无穷}   \w 匹配字母、数字、下划线。
// var reg = /\w+/g,
//   str = "abcdefg";  // ["abcdefg"]

// // n* {0, 正无穷} 0 或者无穷大
// var reg = /\w*/g,
//   str = "abcdefg";  //["abcdefg", ""]

// // n? {0, 1} 按照0或者1的区间匹配
// var reg = /\w?/g,
//   str = "abcdefg"; //['a', 'b', 'c', 'd', 'e', 'f', 'g', '']

// // n{x, y} 区间匹配 一位或者两位  如果y不写就是默认正无穷
// var reg = /\w{1,2}/g,
//   str = "abcdefg"; ["ab", "cd", "ef", "g"];

// // ^n 匹配任何以 n 开头的字符
// // n$ 匹配任何以 n 结尾的字符
// var reg = /^ab/g,
//   str = "abcdefg"; // ^ab=>["ab"]  fg$=? fg

// //以ab开头 以ab结尾
// var str = "ab123ab",
//   reg = /^ab.*ab$/g; //['ab123ab']
// // reg = /^ab|ab$/g; // ["aba", "ab"]

// // 以ab开头 以ab结尾 并且中间是数字
// var str = "ab123456ab",
//   reg = /^ab[\d]+ab$/g;  ["ab123456ab"]

// // 以138开头的11位手机号
// var str = '13812345678',
//   reg = /^138[\d]{8}/g; ['13812345678']

// // ?=n 匹配任何字符后面紧跟字符串 n 的字符串
// var str = "abcdabcdac",
//   reg = /a(?=b)/g; // ['a', 'a']

// // ?!n 匹配任何字符后面不紧跟字符串 n 的字符串
// var str = "abcdabcdac",
//   reg = /a(?!b)/g; // ['a']

// // 匹配 xxxx xxyy 格式
// // 运用子表达式 和 反向引用  ()子表单室 \num num为一就是引用第一个表达式
// var str = "aabbaaaaddddccbb",
//   reg = /(\w)\1(\w)\2/g;



