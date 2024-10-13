import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/hotel_bookings'); // Ensure this matches the URL you see in the json-server output
    // handle response data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
