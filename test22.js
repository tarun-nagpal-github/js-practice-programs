function makeBigger(size) {
	return function () {
		document.body.size.fontSize = size + 'px';
	}
}

var font10 = makeBigger(10);
var font10 = makeBigger(12);
var font10 = makeBigger(14);

document.getElementById('size-10').onClick = font10;
document.getElementById('size-12').onClick = font12;
document.getElementById('size-14').onClick = font14;