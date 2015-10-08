void(
	(function(){
		try{
			var chat = document.getElementById("chat-txt-message");
			var users = document.getElementById("avatar-list");
			var me_button = document.getElementsByClassName("user-info-button")[0];
			var me_span = me_button.getElementsByTagName("span")[0];
			var me = me_span.textContent;
			if (typeof Dubtrack.room.chat.ExtendedMessageFeaturesQuit == "function"){
				Dubtrack.room.chat.ExtendedMessageFeaturesQuit(true);
			}
			var SendChat = Dubtrack.room.chat.sendMessage.bind(Dubtrack.room.chat);
			Dubtrack.room.chat.ExtendedMessageFeaturesQuit = function(isUpdate){
				Dubtrack.room.chat.sendMessage = SendChat;
				delete Dubtrack.room.chat.ExtendedMessageFeaturesQuit;
				if (isUpdate !== true){
					alert("Extended Message Features by Fatboysraidmcdonalds has quit");
				}
			}
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
				var creator = "";
				var notcreator = "";
				var admin = "";
				var notadmin = "";
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
					var iscreator = false;
					var isadmin = false;
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
							} else if (k == "creator") {
								ismod = true;
								iscreator = true;
							} else if (k == "admin") {
								isadmin = true;
							}
						}
						if (ismod == true) {
							mods = mods.concat(append);
							if (iscreator == true) {
								creator = creator.concat(append);
							} else {
								notcreator = notcreator.concat(append);
							}
						} else {
							notmods = notmods.concat(append);
							notcreator = notcreator.concat(append);
						}
						if (isdj == true) {
							dj = dj.concat(append);
						} else {
							notdj = notdj.concat(append);
						}
						if (isadmin == true) {
							admin = admin.concat(append);
						} else {
							notadmin = notadmin.concat(append);
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
					} else if (mine == "@notdj"){
						todo = todo.concat(notdj);
					} else if (mine == "@mod"){
						todo = todo.concat(mods);
					} else if (mine == "@notmod"){
						todo = todo.concat(notmod);
					} else if (mine == "@creator"){
						todo = todo.concat(creator);
					} else if (mine == "@notcreator"){
						todo = todo.concat(notcreator);
					} else if (mine == "@admin"){
						todo = todo.concat(admin);
					} else if (mine == "@nonadmin"){
						todo = todo.concat(notadmin);
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
			alert("Extended Message Features by Fatboysraidmcdonalds has successfully loaded");
		}catch(err){
			alert(err);
			if (typeof Dubtrack.room.chat.ExtendedMessageFeaturesQuit == "function"){
				Dubtrack.room.chat.ExtendedMessageFeaturesQuit();
			}
		}
	}())
);
