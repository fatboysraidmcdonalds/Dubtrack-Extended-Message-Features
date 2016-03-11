#Dubtrack Extended Message Features
Overrides Dubtrack.room.chat.sendMessage to allow you to use some features such as <b>@all</b>

#Instructions
Run the script (open this <a href="https://rawgit.com/fatboysraidmcdonalds/Dubtrack-Extended-Message-Features/master/Bookmark.js" target="_blank">Bookmark</a> link, copy the text on that page, create a bookmark, paste the text into the URL parameter of the bookmark, then save, open the dubtrack tab, and click the bookmark)

#New Tags
<b>@all</b> - Targets everyone <br />
<b>@dj</b> - Targets the DJ <br />
<b>@notdj</b> - Targets everyone who isn't the DJ <br />
<b>@mod</b> - Targets mods + co-owners + creators <br />
<b>@notmod</b> - Targets everyone who isn't a mod / co-owner / creator <br />
<b>@creator</b> - Targets creators <br />
<b>@notcreator</b> - Targets everyone who isn't a creator <br />
<b>@co</b> - Targets co-owners <br />
<b>@notco</b> - Targets everyone who isn't a co-owner <br />
<b>@admin</b> - Targets Dubtrack staff <br />
<b>@nonadmin</b> - Targets everyone who isn't Dubtrack staff <br />

#Notices
<b>A)</b> All tags will automatically split the message to not exceed the chat limit. <br />
<b>B)</b> These new tags (e.g. <b>@all</b>): <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>1)</b> Never target you <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>2)</b> Don't work if they are not in lowercase <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>3)</b> Don't work if they are not isolated (e.g. "hi<b>@all</b>" won't work, but "hi <b>@all</b>" will) <br />
<b>C)</b> Due to how the word detection (see <b>B3</b>) is designed, all whitespaces will be replaced by spaces, and whitespaces won't chain together(e.g. "hi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all" becomes "hi&nbsp;all") <br />
