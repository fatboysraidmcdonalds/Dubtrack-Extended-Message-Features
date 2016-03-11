#Dubtrack Extended Message Features
Overrides Dubtrack.room.chat.sendMessage to allow you to use some features such as <b>@all</b>

#Instructions
Run the script (open this <a href="https://rawgit.com/fatboysraidmcdonalds/Dutrack-Extended-Message-Features/master/Bookmark.js" target="_blank">Bookmark</a> link, copy the text on that page, create a bookmark, paste the text into the URL parameter of the bookmark, then save, open the dubtrack tab, and click the bookmark)

#New Tags
<b>@all</b> - When you type @all, it will replace it with a list of tags targeted to every user <br />
<b>@dj</b> - Replaces @dj with @(current dj name) <br />
<b>@notdj</b> - Replaces @notdj with a list of tagstargeted to everyone who isn't the dj <br />
<b>@mod</b> - Targets mods + co-owners + creators <br />
<b>@notmod</b> - Targets nonmods + nonco-owners + noncreators <br />
<b>@creator</b> - Targets creators <br />
<b>@notcreator</b> - Targets noncreators <br />
<b>@co</b> - Targets co-owners <br />
<b>@notco</b> - Targets nonco-owners <br />
<b>@admin</b> - Targets admins (Dubtrack staff) <br />
<b>@nonadmin</b> - Targets nonadmins (not Dubtrack staff) <br />

#Notices
<b>A)</b> All tags will automatically split the message to not exceed the chat limit. <br />
<b>B)</b> These new tags (e.g. <b>@all</b>): <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>1)</b> Never target you <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>2)</b> Don't work if they are not in lowercase <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>3)</b> Don't work if they are not isolated (e.g. "hi<b>@all</b>" won't work, but "hi <b>@all</b>" will) <br />
<b>C)</b> Due to how the word detection (see <b>B3</b>) is designed, all whitespaces will be replaced by spaces, and whitespaces won't chain together(e.g. "hi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all" becomes "hi&nbsp;all") <br />
