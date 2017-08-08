import axios from 'axios';
const uri = 'http://localhost:3000/api/meetups';

async function fetchMeetups() {
  try {
    const { data } = await axios.get(uri);
  } catch (e) {
    console.log('The issue with your fetch: ' + e.message);
    throw e;
  }
}

export { fetchMeetups };
