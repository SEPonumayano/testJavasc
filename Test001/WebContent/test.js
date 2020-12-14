'use strict';
/**
 * alert("Hello World!");
 * console.log("aaa");
 */

// For文回し
let count;

for(count=1;count<5;count++){
	document.write(count);
}
document.write("<br>");
// 配列

var hairetsu =new Array('あ','い','う','え');

document.write(hairetsu+"<br>");
document.write(hairetsu[1]+"<br>");

//最後尾に要素追加
hairetsu.push('お');
document.write("<br>");

document.write(hairetsu+"<br>");

//最後尾の要素を削除
hairetsu.pop();

document.write(hairetsu+"<br>");

//先頭の要素を削除
hairetsu.shift();

document.write(hairetsu+"<br>");


//先頭に要素を追加
hairetsu.unshift('なし');

document.write(hairetsu+"<br>");

