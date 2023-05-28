import axios from 'axios';

const getDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-GB"); // Convert timestamp to a localized date string
};
// updating the timestamp in the comments section and video details to reflect when it was posted in a more human-readable format
function transformDateAgo(value, args) {
  if (value) {
    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    if (seconds < 29)
      // less than 30 seconds ago will show as 'Just now'
      return "Just now";
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0)
        if (counter === 1) {
          return counter + " " + i + " ago"; // singular (1 day ago)
        } else {
          return counter + " " + i + "s ago"; // plural (2 days ago)
        }
    }
  }
  return value;
}

const getData = ( pathExt = '' ) => {
  return new Promise( async ( resolve ) => {
    const API_videos = "https://project-2-api.herokuapp.com/videos";
    const {api_key} = JSON.parse( sessionStorage.getItem( "apiKey" ) );

    try {

      const responseSideVideos = await axios.get( API_videos + pathExt, {
        params: {api_key},
      } );

      const {status, data} = responseSideVideos

      if ( status !== 200 ) throw Error( responseSideVideos.statusText )

      resolve( data )
    } catch ( error ) {
      console.log( 'Error fetching videos ', error )
    }

  } )
}

const postData = ( currentVieoId, inputText ) => {
  return new Promise( async ( resolve, reject ) => {
    const API_videos = "https://project-2-api.herokuapp.com/videos";
    const {api_key} = JSON.parse( sessionStorage.getItem( "apiKey" ) );

    try {

      const postBody = {
        name: "Guest",
        comment: inputText,
      };

      const response = await axios.post(
        API_videos + `/${ currentVieoId }/comments`,
        postBody,
        {
          params: {
            api_key,
          },
        }
      );

      const {status, data} = response

      if ( status !== 200 ) throw Error( response.statusText )

      resolve( data )

    } catch ( error ) {
      console.log( 'Error posting comment ', error )
    }

  } )
}

const deleteData = ( currentVieoId, commentId ) => {
  return new Promise( async ( resolve, reject ) => {

    const API_videos = "https://project-2-api.herokuapp.com/videos";
    const {api_key} = JSON.parse( sessionStorage.getItem( "apiKey" ) );

    try {
      const response = await axios.delete(
        API_videos + `/${ currentVieoId }/comments/${ commentId }`,
        {
          params: {
            api_key,
          },
        }
      );

      const {status, data} = response

      if ( status !== 200 ) throw Error( response.statusText )

      resolve( data )

    } catch ( error ) {

    }
  } )
}

export {getDate, transformDateAgo, getData, postData, deleteData};
