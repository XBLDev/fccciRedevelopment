# fccciRedevelopment
Code for the coming updated fccci: http://fccci.org.au/au/

Comment 17/10/2017, 4:50 pm:

Currently just experimenting with re-constructing different sections of the original site,
right now the progress is at making the list of the latest of events on the right side of the 
original site. The general idea is to let the rightmenu component load the latest 10 news from
 the MongoDB, get their URLs for the news contents which are text files on Amazon S3, pass the
 URLs to the menuItem component as property, and let each menuItem make a link that will redirect
 to rendering the content in the middle.

Problems:
1. Given the current space available on the screen, and the requested features including login/up 
and potentially animations, some components might have to be made smaller or move to another place.
2. Since the content of the page is retrieved as a text file from Amazon S3, and the page might 
contain images and styling for certain elements/paragraphs, the file on Amazon S3 has to contain 
some sort of tags in it, and when the file is loaded, it has to be parsed. This may prove to be 
difficult to do and some other approaches may be more preferable.
3. The redirect after clicking on each event will require passing parameters to the route, which may 
not work in the current setup because the router seems to only accept absolute path instead of partial
path. But that may be just my misunderstanding.
4. Styling needs more work, the page right now is overly simple.
