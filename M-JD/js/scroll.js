window.onscroll=function (e) {
	// var swiperContainer = document.getElementsByClassName('swiper-container')[0]
	var eve = e||window.event;
	var nav = document.getElementById('nav')
	var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
	// console.log(scrollTop)
	var t = '320';
	if (scrollTop>t) {
		nav.style.opacity = '0.8'
	}else {
		nav.style.opacity = scrollTop/t*0.8
	}
	var backTop = document.getElementById('backTop')
	 var showMe=document.documentElement.clientHeight
	if (scrollTop>showMe) {
		backTop.style.opacity = "1";
		backTop.onclick=function () {
			document.body.scrollTop = 0
		}
	}
	if (scrollTop<showMe) {
		backTop.style.opacity = "0"
	}
}