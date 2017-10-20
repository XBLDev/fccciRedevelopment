# fccciRedevelopment
Code for the coming updated fccci: http://fccci.org.au/au/, code base for user auth and routing: 
https://github.com/XBLDev/ReactJSNodejsAuthRouterv4

Comment 18/10/2017, 3:34 pm:

The "latest news items" on the right side of the page is a success, the basic idea is just 
simply retrieve the top news from mongoDB by making a XHR call upon the mounting of the news
 news list container, and create a list of news links that will redirect to each of the news
 upon clicking by passing the CH/ENG title of the string and the content link. Currently the 
 list of the news is not created as a list but instead are hard code news 0,1 etc, needs to 
 be created automatically once the list of news is loaded.

With routing to each of the news, the problem is similar to the problem back when I was re-doing
the routing to homepage after signup/signin page: the center page is not re-mounted after 
clicking on the link on the right, which is particularly problematic in this case because we 
need to update the content of the news when clicking on a different link, and the only way to 
change the rendering is to re-mount.

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
