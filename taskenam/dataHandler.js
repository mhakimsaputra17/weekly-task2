import { promises as fs } from 'fs';
import path from 'path';
import consola from 'consola';

const dataFilePath = path.join(process.cwd(), 'data.json');

export async function readData() {
  try {
    await fs.access(dataFilePath);
    const fileContent = await fs.readFile(dataFilePath, 'utf8');
    if (!fileContent.trim()) {
      consola.info("File JSON ada tapi kosong.");
      return {};
    }
    return JSON.parse(fileContent);
  } catch (error) {
    consola.info("File JSON tidak ditemukan. Membuat file baru dengan isi kosong.");
    await fs.writeFile(dataFilePath, "{}", 'utf8');
    return {};
  }
}

export async function writeData(data) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    consola.success("Data berhasil disimpan.");
  } catch (error) {
    consola.error("Gagal menyimpan data:", error);
  }
}