const getDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('en-GB') // Convert timestamp to a localized date string
}
// updating the timestamp in the comments section and video details to reflect when it was posted in a more human-readable format
function transformDateAgo (value, args) {
  if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'Just now';
      const intervals = {
          'year': 31536000,
          'month': 2592000,
          'week': 604800,
          'day': 86400,
          'hour': 3600,
          'minute': 60,
          'second': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0)
              if (counter === 1) {
                  return counter + ' ' + i + ' ago'; // singular (1 day ago)
              } else {
                  return counter + ' ' + i + 's ago'; // plural (2 days ago)
              }
      }
  }
  return value;
}


export {getDate, transformDateAgo};

