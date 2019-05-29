window.onload = function() {
 	var button = document.getElementsByTagName("button")[0];
 	button.innerText = "获取验证码";
 	var timer = null;
 	button.onclick = function() {
 		clearInterval(timer);
 		var time = 60;
 		var that = this;
 		timer = setInterval(function() {
 			console.log(time);
 			if (time <= 0) {
 				that.innerText = "";
 				that.innerText = "点击重新发送";
 				that.disabled = false;

 			} else {
 				that.disabled = true;
 				that.innerText = "";
 				that.innerText = "剩余时间" + (time) + "秒";
 				time--;
 			}
 		}, 1000);
 	}
 }
