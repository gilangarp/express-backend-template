# Setup Project

Ikuti langkah-langkah berikut untuk menyiapkan project ini:

## 1. Clone Repository

Clone repository ke dalam folder lokal Anda:

```bash
git clone https://github.com/gilangarp/express-backend-template.git
```

## 2. Ganti Nama Folder Project

Ganti nama folder project dengan nama yang sesuai menggunakan perintah berikut:

- Di **Windows** (menggunakan PowerShell):

  ```bash
  Move-Item -Path "express-backend-template" -Destination "nama-project-anda"
  ```

- Di **Linux/macOS**:

  ```bash
  mv express-backend-template nama-project-anda
  ```

## 3. Masuk ke Folder Project

Masuk ke dalam folder project yang sudah Anda clone:

```bash
cd nama-project-anda
```

## 4. Hapus Folder `.git`

Hapus folder `.git` untuk memulai repository baru (untuk menghindari konflik dengan repository sebelumnya).

- Di **Linux/macOS**:

  ```bash
  rm -rf .git
  ```

- Di **Windows** (menggunakan PowerShell):

  ```bash
  Remove-Item -Recurse -Force .git
  ```

- Atau, Anda bisa menghapus folder `.git` secara manual.

## 5. Hapus File `README.md`

Hapus file `README.md` yang ada karena mungkin Anda ingin menggantinya dengan dokumentasi sesuai project Anda.

- Di **Linux/macOS**:

  ```bash
  rm README.md
  ```

- Di **Windows** (menggunakan PowerShell):

  ```bash
  Remove-Item README.md
  ```

## 6. Install Dependencies

Jalankan perintah berikut untuk menginstall dependencies:

```bash
npm install
```

atau jika menggunakan **Yarn**:

```bash
yarn install
```

## 7. Buat File `.env`

Buat file `.env` di root folder project dan tentukan port yang diinginkan (default adalah 3000):

```env
PORT=3000
```

## 8. Ubah Port (Opsional)

Jika ingin mengubah port, buka folder `src/config`, kemudian pilih file `serverConfig.js`. Sesuaikan port dengan nilai yang ada di `.env`.

## 9. Jalankan Project

Untuk menjalankan project, gunakan perintah berikut:

- Jika menggunakan **npm**:

  ```bash
  npm run dev
  ```

- Jika menggunakan **Yarn**:

  ```bash
  yarn dev
  ```

---
