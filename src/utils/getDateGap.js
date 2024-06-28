
export const getDateGap = (publishedAt)=>{
    const publishedDate = new Date(publishedAt);

// Today's date
    const today = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = today - publishedDate;

    // Convert milliseconds to individual time components
    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = 60 * millisecondsPerSecond;
    const millisecondsPerHour = 60 * millisecondsPerMinute;
    const millisecondsPerDay = 24 * millisecondsPerHour;

    // Calculate differences
    const daysDifference = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    const hoursDifference = Math.floor((differenceInMilliseconds % millisecondsPerDay) / millisecondsPerHour);
    const minutesDifference = Math.floor((differenceInMilliseconds % millisecondsPerHour) / millisecondsPerMinute);
    const secondsDifference = Math.floor((differenceInMilliseconds % millisecondsPerMinute) / millisecondsPerSecond);

    // Calculate the difference in years and months
    const yearsDifference = today.getFullYear() - publishedDate.getFullYear();
    const monthsDifference = (today.getMonth() + 1) - (publishedDate.getMonth() + 1) + yearsDifference * 12;

    let longestGap = '';
    let longestGapValue = 0;
    
    if (yearsDifference > 0) {
        yearsDifference===1?(longestGap = 'year'):longestGap='years';

        longestGapValue = yearsDifference;
    } else if (monthsDifference > 0) {
        monthsDifference===1?(longestGap = 'month'):longestGap='months';

        longestGapValue = monthsDifference;
    } else if (daysDifference > 0) {
        daysDifference===1?(longestGap = 'day'):longestGap='days';
        longestGapValue = daysDifference;
    } else if (hoursDifference > 0) {
        hoursDifference===1?(longestGap = 'hour'):longestGap='hours';
        longestGapValue = hoursDifference;
    } else if (minutesDifference > 0) {
        minutesDifference===1?(longestGap = 'minute'):longestGap='minutes';

        longestGapValue = minutesDifference;
    } else if (secondsDifference > 0) {
        secondsDifference===1?(longestGap = 'second'):longestGap='seconds';
        longestGapValue = secondsDifference;
    }
    
    return `${longestGapValue} ${longestGap} ago`;
}

export const formatViewCount= (viewCount) =>{
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + 'M ';
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + 'k ';
    } else {
      return viewCount + ' ';
    }
  }