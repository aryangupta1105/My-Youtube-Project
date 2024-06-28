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



# Debouncing :


Performance: 
    - if slow typing = 14 words = 14 api calls * 1000users = 14000 api calls
    - if fast typing with debouncing = 3 api calls * 1000users = 3000 api calls 

Debouncing with 200ms: 
    - if difference between 2 key strokes is less than 200ms it will not call api
