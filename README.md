# Setup Proyek

Ikuti langkah-langkah berikut untuk menyiapkan proyek ini:

## 1. Clone Repositori

Clone repositori ke dalam folder lokal Anda dan ubah nama folder sesuai dengan proyek Anda:

```bash
git clone https://github.com/gilangarp/express-backend-template.git
```

Ganti nama folder proyek dengan nama yang sesuai:

```bash
mv express-backend-template nama-proyek-anda
```

## 2. Masuk ke Folder Proyek

Masuk ke dalam folder proyek yang sudah Anda clone:

```bash
cd nama-proyek-anda
```

## 3. Hapus Folder `.git`

Hapus folder `.git` untuk memulai repositori baru (untuk menghindari konflik dengan repositori sebelumnya).

- Di **Linux/macOS**, jalankan perintah berikut:

  ```bash
  rm -rf .git
  ```

- Di **Windows**, jalankan perintah berikut di PowerShell:

  ```bash
  Remove-Item -Recurse -Force .git
  ```

- Atau, Anda bisa menghapus folder `.git` secara manual.

## 4. Hapus File `README.md`

Hapus file `README.md` yang ada karena mungkin Anda ingin menggantinya dengan dokumentasi sesuai proyek Anda.

- Di **Linux/macOS**, jalankan perintah berikut:

  ```bash
  rm README.md
  ```

- Di **Windows**, jalankan perintah berikut di PowerShell:

  ```bash
  Remove-Item README.md
  ```

## 5. Install Dependencies

Jalankan perintah berikut untuk menginstall dependensi:

```bash
npm install
```

atau

```bash
yarn install
```

## 6. Buat File `.env`

Buat file `.env` di root folder proyek dan tentukan port yang diinginkan (default adalah 3000):

```env
PORT=3000
```

## 7. Ubah Port (Opsional)

Jika ingin mengubah port, buka folder `src/config`, kemudian pilih file `serverConfig.js`. Sesuaikan port dengan nilai yang ada di `.env`.

## 8. Jalankan Proyek

Untuk menjalankan proyek, gunakan perintah berikut:

- Jika menggunakan **npm**:

  ```bash
  npm run dev
  ```

- Jika menggunakan **yarn**:

  ```bash
  yarn dev
  ```

---
