# fccciRedevelopment
Code for the coming updated fccci: http://fccci.org.au/au/, code base for user auth and routing: 
https://github.com/XBLDev/ReactJSNodejsAuthRouterv4

Comment 22/11/2017, 3:14 pm:

Try linking this repo with Jira, commit with issus ID to link commits with issue, generally the 
command is: git -m "ISSUE_NUMBER some normal comment". It looks like there's a delay between the 
commit and the linking of the commit and Jira issue. For the subtask of each issue it also 
generates an issue number, so the linking command is the same.

Comment 15/11/2017, 7:57 pm:

The header and footer now stick to top and bottom while the center area scrolls down, to achieve this, set the position css property of header and footer to fixed, and set the z-index css property of the header to a positive number, same for center but a higher than that of header, and footer higher than that of center.

Comment 10/11/2017, 4:44 pm:

For Redux I think i maybe worth it to at least try wrap each of the component with a store provider such that testing the state of each component is easy. Even if the component/app cannot solely rely on Redux it helps with TDD.

Added 2 last sections on the right:

Search, which sends the search keyword to the mounted searchresult page, and the mounted page first gets all the event titles based on the current language, and then uses react-search-input: https://github.com/enkidevs/react-search-input and the keyword to filter the titles and generates a link for each title that contains the keyword. The problem for now is that upon mounting/getting new props the page needs to load all the titles, which may seem not to be that big at the moment but it will certainly explode over time. The other possible approach is that upon clicking the search link, it finds the titles that contain the keyword and pass them as props to the searchresult page, but that also involves loading data.

FCCCI ARCHIVES, which gets a list of the nubmer of events for each month using the same DB the calendar component uses to load its own events, and for each month it generates a link that goes to an archivedeventspage which uses the URL to load the events of the month and generates a list of links each goes to a different event.

Comment 8/11/2017, 2:35 pm:

Added simple reducer test following tutorial: https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f, whose code is in: https://github.com/Gethyl/ReactReduxTestingUsingJestEnzyme. Yesterday the test was based on the test instruction from the official Redux site: https://redux.js.org/docs/recipes/WritingTests.html, which doesn't seem to work for the action creators as it says. And I don't think there's much to test action creators because they just simply return a pair of type and value, which is not really worth testing; the logic and result after executing an action in the reducer on the other hand does have value in testing because we want to make sure that after a certain action the resulting state in the store is as expected.

Comment 7/11/2017, 6:36 pm:

Added galary photos section, whose state is initiated in Redux store and changed by Redux actions. The basic idea here is that instead of saving: loading images, current showing images, total number of images, and the timer that changes the current showing image, every state and the actions that change the states are initiated as a state in a Redux store, and the functions and states are all mapped to a component class as its props. Normally once the frontend gets an array of URLs from backend it saves it as its own state, and the timer starts inside the same component to change the current shown image index, and with Redux these are all saved as states in Redux as states of the entire application instead of just states for a single component, which for this particular case is not very useful, but for other apps that need to keep global states this is useful. However I wonder what's the use for Redux if I can use localStorage: I can just save everything that I want to be global, such as current language, in the local storage.

Tried testing action creator with Jest + Enzyme, not working.

Comment 3/11/2017, 6:48 pm:

The calendar now can load the events from backend based on the currently rendered days of the month, and put links on the 
days that have an event. When the month is changed by clicking on the foward/backward button, the calendar reloads the event from backend again.

Basic idea behind the implementation is based on the original react-calendar-component: the original library when gets the date prop, use the prop to render 3 sets of days: days before this month, days in this month, and days after this month. And now when the calendar is reloaded it also passes the event names/dates of events of the month which it got from backend, and the current language the page uses. And when the calendar gets these props, it checks if any days in the current month matches the dates of events passed in, and if so give that day an extra link that links to an URL based on the current language, plus a different CSS which makes it stand out so the user knows that there's an event on that day.

The calendar currently cannot deal with any event that lasts for longer than 1 day, any event that's longer than 1 day is just conuted as 1 day. It also doesn't take into account of the case where multiple events happening on the same day, which is quite possbile to happen. The react-big-calendar has options of pop ups for multi-events day and rendering for multi-days event, could use as a future reference.

Added a very simple test for the function that generates the days rendered, basically just testing that the output generates more than 30 days, which is true I think for almost all the cases, Feb could be an exception since Feb has 28 days, but since it also renders days from Jan and Mar the total days rendered should exceed 30.

Comment 2/11/2017, 9:04 pm:

The 3 calendar packages explored: https://github.com/nathanstitt/dayz, https://github.com/Hanse/react-calendar, 
https://github.com/intljusticemission/react-big-calendar, basically the idea is that the package ideally should: 
be easy to modify such that it can put a link on each of the event days, and each link when clicked can go to 
the corresponding event, and since react-big-calendar is too difficult to modify and is using the pre2015 createelement
syntax, it's not suitable for the purpose; dayz give an error saying a prop date is not defined; therefore the only 
viable option at this point is react-calendar, a simple library that's written in the component-subcomponent sort of
way, and adding props/modifying the original code is relative easy to do. The idea is that when changing the month with 
the forward and backward buttons, it sends a request to backend to load the events of next/previous month, send the events
to the calendar as a prop, and the calendar gives the days that have events links and gives different classnames to each day cell accordingly so the user knows that whether a day has an event or not.

Started on testing React Components with Jest and Enzyme, for now just basic ideas such as testing whether the output render
is as expected, following tutorial here: https://www.sitepoint.com/test-react-components-jest/. Next steps would be to test function logics and if possible whether routing is working as expected.

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
