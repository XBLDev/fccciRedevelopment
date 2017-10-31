# fccciRedevelopment
Code for the coming updated fccci: http://fccci.org.au/au/, code base for user auth and routing: 
https://github.com/XBLDev/ReactJSNodejsAuthRouterv4

Comment 31/10/2017, 7:42 pm:

Added the calendar using the react-big-calender package: https://github.com/intljusticemission/react-big-calendar,
the react-event-calendar https://www.npmjs.com/package/react-event-calendar gives an error when compiled even with 
the simplest setup. The UI of the react-big-calendar is a bit way too complex for the purpose of just re-creating 
the original event calendar, and the top tool-bar is too wide to fit into the 20vw space. The calendar itself requires
the parent div element to have a fixed height, which I don't think is a reasonable design decision on the original 
author, but maybe min and max height can be used to compensate that.

Comment 30/10/2017, 5:52 pm:

Added a new user profile page with for now just user's name on it, and the menu UI adjusted to have enough room 
to display user's name when logged in, when there's no log in the user name area is just a slash with a font color
that's the same as the background so it can't be seen. 

Next steps will be creating event photos and event calendar with ReactJS, potential libraries to use: https://www.npmjs.com/package/react-event-calendar, https://www.npmjs.com/package/react-photo-gallery  

Comment 27/10/2017, 6:40 pm:

The cause of the previous error caused by switching language is: the menu items get a newsTitle property passed
by the Menu, which get the newsTitle based on the current Language in the render loop by selecting the title field 
of each item in the list of news, which causes a problem because every time it switches the language, what happens 
is that since the language is already changed say from Eng to Ch, it wants the menu items to render the Ch titles, 
but the list of news needs to load new data from backend before it can get Ch titles, and since the menu items 
can't find Ch titles, or rather get a non-defined Ch title from Menu because it can only find Eng titles, it returns 
an error.

The user Auth is back, the UI style is still the material UI used by the base code, so the style is a bit 
in-consistent with the rest of the page, but since the material UI is the def better looking style it might
worth considering changing to material UI. The header UI might need re-work so the username won't cause the 
entire UI to collapse.

Comment 26/10/2017, 4:24 pm:

The menu items on the right hand side can now use language based on language setting switching between
Eng and Ch, and the backend can get the newsboard content based on the language which is passed to 
the backend as a parameter of XMLHttp request. How to use variables to query object: https://stackoverflow.com/questions/17039018/how-to-use-a-variable-as-a-field-name-in-mongodb-native-findone

The routing is still a bit of problem: it seems that if I don't include the right side menu as part of Home
and Newsboard, when switching between 2 languages there will be some sort of problems caused by react component
life cycle, which I think I already found the solution but that will be tomorrow.

Ideally upon opening the site it can be redirected from / to /en which is the default language, now on start
it's /, and needs the language button to switch between /, /en, and /cn 

Comment 25/10/2017, 1:29 pm:

The paragraphs are now roughly put under 3 categories: title, image, and a paragraph with links in
it. Basically with the first 2 they are just a paragraph on their own, so detecting the tags in them
are enough for the moment; but with the 3rd one since the link could be placed anywhere in the paragraph,
it has to be seperately passed into a specialized component as its property, parsed to identify the 
links, and rendered according to the result of parsing. 

With the original wordpress site it's easy with the built in tools that allow site builders to put tags 
freely, but with the redeveloped site it has to be done mannually. Maybe it's preferable to develop a set of
web interfaces that can do similiar things in the future so uploaders can just upload a new event by themselves.

Previously refreshing the page will cause the error "can not get page abc", fixed with suggestions: https://stackoverflow.com/questions/39058646/cannot-get-login, a common, simple practice that can be applied when 
building other sites. 

Comment 24/10/2017, 1:07 pm:

The files that contain the latest news now contain html tags such as h1, img and when the file is 
sent back to the front end, it's parsed to detect these tags to know that if a certain element is
a header or image, and render accordingly. 

For now it can render a paragraph that has its own tag, such as header and image. The problem is 
that there are paragraphs which have href links in the middle of them, which makes it harder. I 
assume I will have to create sub-components for paragraphs which can get the link as its property
upon monuting and render it as a proper html link element. 

Comment 23/10/2017, 8:48 pm:

The backend can now read a file on Amazon S3 and send it back when the file is finished, previously
the http request didn't work because to get a file from Amazon S3 a https request is required.

Upon receiving the entire file string, the div renders the entire thing without new line breaks 
which is contained in the string sent back by the server. Odd but the solution is simple: make a 
new newsParagraph class, split the string sent back by the server by the return sign, and pass each
individual paragraph as property to newsParagraph class. This solution also helps I think if I need
to insert some images or style some paragraphs, seperating the paragraphs certainly makes it easier.

Comment 20/10/2017, 8:48 pm:

The event list on the right can now automatically generate list of events by reading the data
from backend, and use each record in the data as property to build each list item.

The Newsboard, now upon redirecting from clicking on the links on the right, can change its
rendering based on the this.props.location, and get the URL for the file of the current content.

Previously although this.props.location changes when the Newsboard is redirected, it doesn't
re-mount when it changes, and I thought a component cannot re-render unless it's re-mounted.

Turns out there is a way to re-render the component without re-mounting when the path property 
changes: the componentWillReceiveProps(nextProps) lifecycle function of a component can get 
the currentURL, and since this is called when the this.props.location is changed, it can be 
used to reset state, which can be used to re-render the component without re-mounting it.

And because this function is called when props changes, it can be used to send a XMLHttpRequest
to backedn to get whatever data is needs to re-render itself. And this is achieved by sending the
request with the current URL/news name as the request parameter, and once the backend recieves
the request, it gets the news name, and check if there's a news in the MongoDB that has the same 
news name, and send back the URL if found one.

The next step is naturally is that instead of sending the URL back, it uses the URL to get the file
on Amazon S3, and somehow send the file data/string back to the front end for rendering. The Http
request doesn't work somehow, will try fix it next week.

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
