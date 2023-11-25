// Function to fetch and parse JSON data
async function fetchData(josn_part) {
  try {
    // Fetch the JSON file
    const response = await fetch(josn_part);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data
    const jsonData = await response.json();
    console.log(jsonData)
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch and parse JSON data
console.log(fetchData("/data/product.json"))
