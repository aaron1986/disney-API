async function fetchData(url) {
    try {
      const result = await fetch(url);
     
      // Parse the JSON data
      const outputFile = await result.json();
      outputFile.data.forEach(output => {
        console.log(`${output.name} TvShow ${output.tvShows}`);
      });
      return outputFile;

    } catch (error) {
      console.log(error);
    }
  }
  
  // Example usage
  const apiURL = 'https://api.disneyapi.dev/character';
  fetchData(apiURL);
