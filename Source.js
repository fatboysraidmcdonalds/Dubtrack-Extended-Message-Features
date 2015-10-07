javascript:void( /*Remove "javascript:" if you don't want this as a bookmark*/
	(function(){
		try{
			var chat = document.getElementById("chat-txt-message");
			var users = document.getElementById("avatar-list");
			var me_button = document.getElementsByClassName("user-info-button")[0];
			var me_span = me_button.getElementsByTagName("span")[0];
			var me = me_span.text;
			if (Dubtrack.room.chat.fatboysraidmcdonaldsSendMessage == true){
				alert("Extended Message Features by Fatboysraidmcdonalds already loaded");
			}else{
				Dubtrack.room.chat.fatboysraidmcdonaldsSendMessage = true;
				var SendChat = Dubtrack.room.chat.sendMessage.bind(Dubtrack.room.chat);
				var Max = chat.maxLength;
				var Say = function(txt){
					chat.value = txt;
					SendChat();
				};
				Dubtrack.room.chat.sendMessage = function(){
					var c = users.children;
					var all = "";
					var i;
					for (i = 0; i < c.length; i++) {
						var name = c[i].className;
						var split = name.split(/\s+/);
						var j;
						for (j = 0; j < split.length; j++) {
							var k = split[j];
							var test = k.substr(0,5);
							var ident = k.substr(5);
							if (test == "user-") {
								if (ident != me) {
									all = all.concat("@").concat(ident).concat(" ");
									break;
								}
							}
						}
					}
					var msg = chat.value;
					var toreplace = msg.split(/\s+/);
					var todo = "";
					for (i = 0; i < toreplace.length; i++) {
						var space = " ";
						if (todo == ""){
							space = "";
						}
						todo = todo.concat(space);
						var mine = toreplace[i];
						if (mine == "@all"){
							todo = todo.concat(all);
						} else {
							todo = todo.concat(mine);
						}
					}
					var split = todo.split(/\s+/);
					var current = "";
					var replace = "";
					for (i = 0; i < split.length; i++) {
						var mine = split[i];
						var space = " ";
						if (current == ""){
							space = "";
						}
						replace = current.concat(space).concat(mine);
						if (replace.length > Max) {
							Say(current);
							replace = "";
						}
						current = replace;
					}
					Say(current);
				};
				alert("Extended Message Features by Fatboysraidmcdonalds loaded successfully");
			}
		}catch(err){
			alert(err);
		}
	}())
);
