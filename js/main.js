window.onload = function(){
	
	
	getMessageList();

	// //获取评论列表
	function getMessageList(){
		ajax({
			url: "./php/message-display.php",
			type: "POST",
			dataType: "JSON",
			success: function(data){
				
				data = JSON.parse(data);
				let length = data.length;
				let str = '';
				for(let i = 0; i < length; i++){

					str += '<div class="message-item">'+
					'<div class="message-content">' + data[i].content + '</div>'+
					'<div class="message-details"><span class="name">'+data[i].name+ '</span><span class="time">' + data[i].datetime + '</span></div>'+

					'</div>';

				}

				document.getElementById('messageList').innerHTML = str;



			},
			fail: function(status){
				alert("err:" + status);
			}
		});
	}
	


	//留言
	document.getElementById('submit').ontouchstart = save;

	function save(){

		var audio = document.getElementById("audio");
		if(audio.paused){
			audio.play();
		};


		let messageContent = html_encode(document.getElementById('messageContent').value);
		let name = html_encode(document.getElementById('name').value);

		if(messageContent == ''){
			alert('你还没有跟我说新年快乐呢~');
			return false;
		}else if(name == ''){

			alert('告诉我你是谁~');
			return false;

		}

		ajax({
			url: "./php/message-add.php",
			type: "POST",
			dataType: "JSON",
			data: {
				messageContent: messageContent,
				name:name
			},
			success: function(data){

				alert('留言成功！祝你除夕快乐哦！');

				getMessageList();
				
			},
			fail: function(status){
				alert("err:" + status);
			}
		});
	}
}