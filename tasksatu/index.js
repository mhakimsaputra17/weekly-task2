function fetchData(status) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status === true) {
        resolve("Data berhasil diambil");
      } else {
        reject("Gagal mengambil data");
      }
    }, 3000);
  });
}

export function callFetch() {
  // contoh pemanggilan dengan status true
  fetchData(true)
    .then((result) => {
      console.log("Sukses: ", result);
    })
    .catch((error) => {
      console.error("Gagal: ", error);
    });

  // contoh pemanggilan dengan status false
  fetchData(false)
    .then((result) => {
      console.log("Sukses: ", result);
    })
    .catch((error) => {
      console.error("Gagal: ", error);
    });
}

export const AmbilData = async () => {
  try {
    const dataBerhasil = await fetchData(true);
    console.log("Sukses Async:", dataBerhasil);

    const dataGagal = await fetchData(false);
    console.log(dataGagal);
  } catch (error) {
    console.error("Gagal Async:", error);
  }
};
// AmbilData();
// export default AmbilData;
