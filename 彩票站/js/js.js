var btn = document.getElementById('btn')
var span = document.getElementsByTagName('span')
btn.onclick = function () {
	for(var i = 0;i < span.length;i++){
	span[i].innerHTML = parseInt(Math.random()*10)
}
}