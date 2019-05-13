// 禁止輸入數字以外的字符
function ValidateNumber(e, pnumber)
{
    if (!/^\d+$/.test(pnumber))
    {
        e.value = /^\d+/.exec(e.value);
    }
    return false;
}

// 獲取input內容
var number = document.getElementsByClassName('number')

// var reset = ['x','y','i','j']



document.getElementById('input').addEventListener("input", function(){
	
	var input = this.value
	var arr = [];
	var str = input.toString();
	
	for (var i = 0, len = input.length; i < len; i++) {
		arr.push(str.charAt(i));
	}
	

// 	var numArr = input.split('')
	
// 	var a = numArr[numArr.length-1];// 個位
// 	var b = numArr[numArr.length-2];// 十位
// 	var c = numArr[numArr.length-3];// 百位
// 	var d = numArr[numArr.length-4];// 千位
	for(let i = 0; i < 4; i++) {
		number[i].classList = 'number no' + arr[i];
	}
	
// 	number[1].classList.remove('no' + reset[1])
// 	number[1].classList.add('no' + c)
// 	number[2].classList.remove('no' + reset[2])
// 	number[2].classList.add('no' + b)
// 	number[3].classList.remove('no' + reset[3])
// 	number[3].classList.add('no' + a)
// 	reset[0] = d
// 	reset[1] = c
// 	reset[2] = b
// 	reset[3] = a
})


// 使用input改變主題顏色
var mainColor = document.querySelector('#mainColor')
var styles = getComputedStyle(document.documentElement)
var colorValue = styles.getPropertyValue('--main_color')

function mainColorUpdate() {
	document.documentElement.style.setProperty('--main_color', this.value)
}
mainColor.addEventListener('change', mainColorUpdate)