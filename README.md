# features: 
    -Header
        -Hamburger icon
        -Logo
        -Search Bar
        -user Icon
    -Body
        -SideBar(menu)
            -MenuItems
        -Filter Buttons List
        -Video Container
            -Video Cards * n
    
# Features includes:
- using create-react-app
- Dynamic routing
- configured Routing 
- created Header component
- created SideBar Component (Menu)
- setup Firebase to the app and deployment
- created Main Container
    - created Video Container
    - fetched popular video data from youtube api
    - created Video Component using the video Data
    - Used Link Tag to go to watch page 
- created WatchPage
    - used VideoId using useSearchParams
    - used iframe tag to show video
    - created Channel Detail component
        - fetched channel pfp and data from usePfp hook
        - created subscribe/unsubscribe feature
    - created Comment Section 
        - Added add your comment section
        - fetched comments from youtube api 
        - created Comment Component using the data
    - created VideoSuggestion Page using the Popular Video api
    - created Suggestion Video Card 
- Added routing to SideBar Home icon
- Creating Higher Order Component for Video Card
- Creating the search feature
    - showing Suggestion Feature
    - fetching youtube suggestion api to fetch suggestions
    - Showing suggestion on search ui
    - Added Routing to the suggestions
    - Configured input bar to close on clicking outside and isSubmitted 
    - fetching the search query using UseSearchParams
    - fetching the videos using search_query term
- Created the Search Result Page using results 
- fetched the video Data using videoId from search_query api hook
- Setted routing to watch page from result Video Card using videoId
- Cache Implemented: Optimized our Search Feature by making cache
- created search Slice in our store 
- Created Cache in our store to save the api calls of suggestions 
- Created Comment List component
- created comment only component
- Updated Comment Section to Nested Comments like Reddit...
- Creating Live Chat Feature: 
    - Learned about Api polling
    - used set interval to make api calls 
    - used dummy data for api
    - created helper.js to get random names and strings
    - created LiveChat Component
        - created ChatMessage Component
    - created chatSlice in the REDUX store 
    - reducers fxn like add message after a limit
    - splice the messages from top
    - col-reverse to add message at the bottom
    - add your message to the live chat
- Created Shimmer for result page
    - created resultShimmer card component
- Added search query api call to SideBar (MENU ITEMS)
- Added Error handling to the api calls in custom hooks 
- created custom hooks for each api calls 
- Created fetching channel by channel name feature 
- Created custom hook to fetch channel by channel name
- created resultChannel Component and added to searchResultPage
- Adding Firebase authentication to the app but not working due to api consent issue..
- Deploying our app




# New Topics learned: 
- Creating Live Chat 
- DeBouncing
- Search Feature ( on each keystroke making an api call)
- Api Polling used in Live Chat 
- learned about unshift: used for pushing data in first
- Object.assign to merge two objects..
- Created searchCache to store the api calls already made 
- optimized our search feature 

Live App: [Link](https://by-aryan.web.app/)

# Debouncing :


Performance: 
    - if slow typing = 14 words = 14 api calls * 1000users = 14000 api calls
    - if fast typing with debouncing = 3 api calls * 1000users = 3000 api calls 

Debouncing with 200ms: 
    - if difference between 2 key strokes is less than 200ms it will not call api
