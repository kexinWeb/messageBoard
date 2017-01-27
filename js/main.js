window.onload = function(){



	//获取评论列表
	ajax({
		url: "./php/message-display.php",
		type: "POST",
		dataType: "JSON",
		data: {
		},
		success: function(data){
			alert(data);
			// data = JSON.parse(data);

		},
		fail: function(status){
			alert("err:" + status);
		}
	});


	//留言
	document.getElementById('submit').onclick = save;

	function save(){

		let messageContent = document.getElementById('messageContent').value;
		let name = document.getElementById('name').value;

		alert(name);
		alert(messageContent);

		ajax({
			url: "./php/message-add.php",
			type: "POST",
			dataType: "JSON",
			data: {
				messageContent: messageContent,
				name:name
			},
			success: function(data){
				alert(data);
				// data = JSON.parse(data);
				
			},
			fail: function(status){
				alert("err:" + status);
			}
		});
	}
}