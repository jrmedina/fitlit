function fetchData(dataType) {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataType}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => console.log(error));
}

function getData() {
  const result = Promise.all([
    fetchData("users"),
    fetchData("sleep"),
    fetchData("hydration"),
    fetchData("activity"),
  ]).then((responses) => {
    return responses;
  });
  return result;
}

export { getData };
