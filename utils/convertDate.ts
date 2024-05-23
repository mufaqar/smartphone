export function convertDateFormat(dateString:any) {
    // Parse the date string
    const date = new Date(dateString);

    // Months array to convert month number to month name
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Extract day, month, and year
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Construct the desired format
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
}