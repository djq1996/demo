function OpenNewPage(ele,id,pageurl) {
			mui('body').on('tap',ele, function() {
				mui.openWindow({
					url: pageurl,
					id: id,
					styles: {
						popGesture:"close"
					},	
					show: {
						aniShow: 'pop-in', //页面显示动画，默认为”slide-in-right“；
						duration: '300', //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
					},
					 waiting:{
				      autoShow:true,//自动显示等待框，默认为true
				      title:'主银，表着急...',//等待对话框上显示的提示内容
				    }
				})
			})
		}