export const GOOGLE_API_KEY = "AIzaSyCItiCmIoZfl7jIZ_WjmhWmgU0LYIIulNE";
export const YOUTUBE_API_URL ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key= " + GOOGLE_API_KEY;
export const CHANNEL_PFP_API = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=';

export const YOUTUBE_API_URL_VIDEO = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';

export const YOUTUBE_COMMENT_API_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=";

export const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const userIcon = "https://th.bing.com/th/id/OIP.-O2ZGBu9WPEjdIMTFANy5QHaHa?rs=1&pid=ImgDetMain";

export const YOUTUBE_LIKED_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=";