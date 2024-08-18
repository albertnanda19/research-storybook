# Template Front-end Renify menggunakan Next JS

Repositori ini berisi template dasar untuk pengembangan front-end menggunakan Next.js yang telah disesuaikan untuk kebutuhan PT UNITY MEMBANGUN BANGSA atau Renify. Template ini sudah termasuk penggunaan `ui.shadcn`, sebuah library komponen yang berbasis Tailwind CSS dari Vercel, yang memudahkan pengembangan UI dengan komponen yang siap pakai dan mudah dikustomisasi.

## Mulai Menggunakan Template

Untuk memulai menggunakan template ini, ikuti langkah-langkah berikut:

### Kloning Repositori

Klon repositori ini menggunakan Git:

```bash
git clone git@github.com:unity-membangunbangsa/template-front-end-next-js.git {{project-name}}
```

### Instalasi Dependensi

Masuk ke direktori proyek dan instal dependensi menggunakan salah satu package manager berikut:

- **NPM:**

  ```bash
  cd {{project-name}}
  npm install
  ```

- **Yarn:**

  ```bash
  cd {{project-name}}
  yarn add
  ```

- **PNPM:**

  ```bash
  cd {{project-name}}
  pnpm install
  ```

- **Bun:**
  ```bash
  cd {{project-name}}
  bun install
  ```

### Menambah Komponen ui.shadcn

Untuk menambah komponen ui.shadcn, gunakan perintah berikut:

```bash
npx shadcn-ui@latest add {{nama-component}}
```

Nama-nama komponen yang tersedia dapat dilihat di [dokumentasi resmi ui.shadcn](https://ui.shadcn.com/docs/components).

### Penggunaan Visual Studio Code

Saat menggunakan Visual Studio Code, pastikan untuk mengaktifkan fitur yang secara otomatis menghapus import yang tidak digunakan dan memberikan peringatan jika ada variabel, state, atau fungsi yang tidak digunakan. Hal ini membantu menjaga kode agar tetap bersih dan efisien.

## Lisensi

Proyek ini dilisensikan di bawah PT UNITY MEMBANGUN BANGSA atau Renify.

Selamat mengembangkan dengan template Next.js dari Renify!
