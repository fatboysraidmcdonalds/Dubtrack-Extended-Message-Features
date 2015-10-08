#New Tags
@all - When you type @all, it will replace it with a list of tags targeted to every user <br />
@dj - Replaces @dj with @(current dj name) <br />
@notdj - Replaces @notdj with a list of tagstargeted to everyone who isn't the dj <br />
@mod - Targets mods + creators <br />
@notmod - Targets nonmods + noncreators <br />
@creator - Targets creators <br />
@notcreator - Targets noncreators <br />
@admin - Targets admins <br />
@nonadmin - Targets nonadmins <br />

#Notices
A) All tags will automatically split the message to not exceed the chat limit. <br />
B) Tags (e.g. @all) will <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Never target you <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) Not work if they are not in lowercase <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) Not work if they are not a word (e.g. "hi@all" won't work, but "hi @all" will) <br />
C) Due to how the word detection (see B3) is designed, all whitespaces will be replaced by spaces, and whitespaces won't chain together(e.g. "hi&nbsp;&nbsp;all" becomes "hi&nbsp;all") I'm working on a fix for this <br />
