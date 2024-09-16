// import React from 'react';

// Fetching Exercises data from rapidApi
const url = 'https://exercisedb.p.rapidapi.com/status';
export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ebb7b91261msha70df251eaac37ep183779jsn0e281977d71a',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, exerciseOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}




const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw';
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'process.env.REACT_APP_RAPID_API_KEY',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


try {
	const response = await fetch(youtubeUrl, youtubeOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

  export const fetchData = async (url, options, fetchBodyPartsData) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // Check if the data is an array
      if (Array.isArray(data)) {
        return data;
        // console.log("Fetch Data test", fetchBodyPartsData)
      } else {
        console.error('Expected an array but got:', data);
        return []; // Return an empty array if data is not an array
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array on error
    }
  };
  
  
  
  



  









