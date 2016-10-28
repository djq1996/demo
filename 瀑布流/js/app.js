window.onload=function(){
	imgLocation("container","box");
	//JSON
    var imgData={"data":[{"src":"8.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}//Jason字符串模拟数据
	window.onscroll=function(){//滚动条
		if (checkFlag()) {
			var cparent=document.getElementById("container");
            for (var i = 0; i < imgData.data.length; i++) {
            	var ccontent=document.createElement('div');
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boximg=document.createElement('div');
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img=document.createElement("img");
                img.src="img/"+imgData.data[i].src;
                boximg.appendChild(img);
                
		}
		imgLocation("container","box");
	}
}
}

//检测用方法排列的最后一张图片距离顶部的高度是否小于浏览器高度+滚动的高度
function checkFlag(){
	    var ccontent=document.createElement('div');	
	    var cparent=document.getElementById('container');
		var ccontent=getChildElement(cparent,"box");
		var lastContentHeight=ccontent[ccontent.length-1].offsetTop;//最后一张图片距顶部高度
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;       //浏览器兼容 滚动的像素
		// console.log(scrollTop);没显示
		var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;//浏览器兼容
		// console.log(lastContentHeight+":"+scrollTop+":"+pageHeight);没显示
        if (lastContentHeight<scrollTop+pageHeight) {
        	return true;
        };
	}




function imgLocation(parent,content){
    var cparent=document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);//获取cparent元素下所有引用content类的元素的方法
    var imgWidth=ccontent[0].offsetWidth;         //元素的宽度（宽度固定且相等）
    var num=Math.floor(document.documentElement.clientWidth/imgWidth);//获取横向能容纳的图片数量
    cparent.style.cssText="width:"+imgWidth*num+"px;margin:0 auto;"  //设置父元素的宽度和剧中显示
    var BoxHeightArr=[];                               //承载单排图片高度的数组
    for (var i = 0; i < ccontent.length; i++) {
    	if (i<num) {//循环第一排
    		BoxHeightArr[i]=ccontent[i].offsetHeight;
    	}else{
    		var minheight=Math.min.apply(null,BoxHeightArr);//数组中高度最小的图片的高度
    		var minIndex=getminheightLocation(BoxHeightArr,minheight);//获取数组中最小高度的索引的方法
    		ccontent[i].style.position="absolute";
    		ccontent[i].style.top=minheight+"px";
    		ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
    		BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight;//重置最小高度图片的高度
    	}
    };
}
function getminheightLocation(BoxHeightArr,minheight){
	 for (var i in BoxHeightArr) {
	 	if (BoxHeightArr[i]==minheight) {
	 		return i;
	 	};
	 };
}
function getChildElement(parent,content){
	var contentArr=[];
	var allcontent=parent.getElementsByTagName("*");
	for (var i = 0; i < allcontent.length; i++) {
		if (allcontent[i].className==content) {
			contentArr.push(allcontent[i]);
		};
	};
	return contentArr
}