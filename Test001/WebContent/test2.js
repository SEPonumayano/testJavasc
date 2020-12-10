/**
 *document.write("aaa<br>");
 */

function judgement() {
    let num = document.getElementById("sample").value;

    if (num % 2 == 0) {
    	alert('偶数です');
    } else if(num % 2 == 1) {
    	alert('奇数です');
    }else{
    	alert('数字を入力');
    }
}