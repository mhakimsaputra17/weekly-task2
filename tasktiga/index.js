const getUsers = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    let arr = [];
    const usersData = await response.json();
    const resultData = usersData.map(({ name, address: { city } }) => {
      arr.push({ name, city });
    });
    const sortCity = arr.sort((a, b) => a.city.localeCompare(b.city));
    console.log(sortCity);
  } catch (error) {
    if (error instanceof Error) console.log(error);
  }
};
// getUsers();
export default getUsers;
