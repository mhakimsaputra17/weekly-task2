export function getDataFromServer(status, callback) {
  setTimeout(function () {
    if (status) {
      callback(["product 1", "product 2", "product 3"], null);
    } else {
      const err = new Error("failed to fetch data");
      err.name = "Error";
      callback(null, err);
    }
  }, 3000);
}

export const processData = (result, error) => {
  try {
    if (error) {
      throw error;
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// getDataFromServer(true, processData);
export default getDataFromServer;
