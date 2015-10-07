javascript:void( /*Remove "javascript:" if you don't want this as a bookmark*/
	(function(){
		try{
			var chat = document.getElementById("chat-txt-message");
			var users = document.getElementById("avatar-list");
			var me_button = document.getElementsByClassName("user-info-button")[0];
			var me_span = me_button.getElementsByTagName("span")[0];
			var me = me_span.textContent;
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
					var dj = "";
					var notdj = "";
					var mods = "";
					var notmods = "";
					var i = 0;
					for (i = 0; i < c.length; i++) {
						var name = c[i].className;
						var split = name.split(/\s+/);
						var j = 0;
						var ident = "";
						for (j = 0; j < split.length; j++) {
							var k = split[j];
							var test = k.substr(0,5);
							var found = k.substr(5);
							if (test == "user-") {
								if (found != me) {
									ident = found;
								}
								break;
							}
						}
						var ismod = false;
						var isdj = false;
						var append = ("@").concat(ident).concat(" ");
						if (ident != "") {
							all = all.concat(append);
							j = 0;
							for (j = 0; j < split.length; j++) {
								var k = split[j];
								if (k == "mod") {
									ismod = true;
								} else if (k == "currentDJ") {
									isdj = true;
								}
							}
							if (ismod == true) {
								mods = mods.concat(append);
							} else {
								notmods = notmods.concat(append);
							}
							if (isdj == true) {
								dj = dj.concat(append);
							} else {
								notdj = notdj.concat(append);
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
						} else if (mine == "@dj"){
							todo = todo.concat(dj);
						} else if (mine == "@mods"){
							todo = todo.concat(mods);
						} else if (mine == "@notdj"){
							todo = todo.concat(notdj);
						} else if (mine == "@notmods"){
							todo = todo.concat(notmod);
						} else{
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
