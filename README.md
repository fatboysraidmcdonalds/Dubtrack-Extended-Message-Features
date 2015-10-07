#New Tags
@all - When you type @all, it will replace it with a list of tags targeted to every user
@dj - Replaces @dj with @(current dj name)
@notdj - Replaces @notdj with a list of tagstargeted to everyone who isn't the dj
@mod - Targets mods + creators
@notmod - Targets nonmods + noncreators
@creator - Targets creators
@notcreator - Targets noncreators

#Notices
A) All tags will automatically split the message to not exceed the chat limit.
B) Tags (e.g. @all) will
	1) Never target you
	2) Not work if they are not in lowercase
	3) Not work if they are not a word (e.g. "hi@all" won't work, but "hi @all" will)
C) Due to how the word detection (see B3) is designed, all whitespaces will be replaced by spaces, and whitespaces won't chain together(e.g. "hi  all" becomes "hi all") I'm working on a fix for this
