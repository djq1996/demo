
	// 倒计时
	var daojishi = document.getElementById('daojishi')
	var hour = rand(00,8)
	var minute = rand(0,59)
	var second = daojishi.getElementsByTagName('span')[2].innerHTML
	var timer = null;
	function rand(min,max) {
		return parseInt((max-min)*Math.random()+min)
	}
	function go() {
		timer = setInterval(function () {
		second--;
		while (second<0) {
			second="59"
			minute-=1;
		}
		while (minute<0) {
			minute="59"
			hour-=1;
		}
	}, 1000)
	 
	}
	go() 
	setInterval(function () {
		daojishi.innerHTML ="<span>"+ hour+"</span>"+":"+"<span>"+minute+"</span>"+":"+"<span>"+second+"</span>"
	}, 1000)

	var swiper = new Swiper('.swiper-container1', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 30
	});
	var swiper = new Swiper('.swiper-container3', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop:true,
		autoplay:2500
	});