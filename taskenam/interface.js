import readline from "readline";
import consola from "consola";
import { readData, writeData } from "./dataHandler.js";

export default function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Masukkan Pilihan (1-4) > ",
  });

  consola.info(`==== JSON MANIPULATOR ====
(1) Add Data
(2) Remove Data
(3) Show Data
(4) Exit`);

  rl.prompt();

  rl.on("line", async (input) => {
    const command = input.trim().toLowerCase();
    switch (command) {
      case "1":
        await addData();
        break;
      case "2":
        await removeData();
        break;
      case "3":
        await showData();
        break;
      case "4":
        consola.info("Keluar dari program...");
        rl.close();
        process.exit(0);
        break;
      default:
        consola.warn("Perintah tidak dikenal. Gunakan: 1, 2, 3, atau 4");
    }
    rl.prompt();
  });

  rl.on("close", () => {
    consola.info("Program berakhir.");
    process.exit(0);
  });
}

const addData = async () => {
  consola.info("Menambahkan data...");
  let currentData = await readData();
  if (!currentData.items) {
    currentData.items = [];
  }
  let newId =
    currentData.items.length > 0
      ? currentData.items[currentData.items.length - 1].id + 1
      : 1;
  const newItem = { id: newId, name: "Item baru" };
  currentData.items.push(newItem);
  await writeData(currentData);
};

const removeData = async () => {
  consola.info("Menghapus data...");
  let currentData = await readData();
  if (currentData.items && currentData.items.length > 0) {
    currentData.items.pop();
    await writeData(currentData);
  } else {
    consola.info("Tidak ada data untuk dihapus.");
  }
};

const showData = async () => {
  consola.info("Menampilkan data...");
  const currentData = await readData();
  consola.log("Data:", currentData);
};

// main();
