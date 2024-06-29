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




# Debouncing :


Performance: 
    - if slow typing = 14 words = 14 api calls * 1000users = 14000 api calls
    - if fast typing with debouncing = 3 api calls * 1000users = 3000 api calls 

Debouncing with 200ms: 
    - if difference between 2 key strokes is less than 200ms it will not call api
