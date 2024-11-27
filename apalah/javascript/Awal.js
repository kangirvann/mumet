// Objek menu dengan dua kondisi: pengembangan atau sudah selesai
const menuItems = {
    home: {
        content: `<h1>HOME</h1><p>Pencet Apalagi? Ya Ini Page Home....</p>`,
        isCompleted: false, // Jika true, akan mengarahkan ke halaman lain
        redirectUrl: '#' // URL halaman yang dituju ketika selesai
      },
    sks: {
      content: `<h1>Jadwal SKS</h1><p>Fitur ini sedang dalam proses pengembangan. Harap bersabar.</p>`,
      isCompleted: false, // Jika true, akan mengarahkan ke halaman lain
      redirectUrl: '#' // URL halaman yang dituju ketika selesai
    },
    matkul: {
      content: `<h1>Jadwal Matkul</h1><p>Fitur ini sedang dalam proses pengembangan. Harap bersabar.</p>`,
      isCompleted: false,  // Fitur sudah selesai
      redirectUrl: '#' // Halaman yang dituju
    },
    portfolio: {
      content: `<h1>Portofolio Mahasiswa</h1><p>Fitur ini sedang dalam proses pengembangan. Harap bersabar.</p>`,
      isCompleted: 'page.php',
      redirectUrl: 'page.php'
    },
    ai: {
      content: `<h1>Fitur AI</h1><p>Fitur ini sedang dalam proses pengembangan. Harap bersabar.</p>`,
      isCompleted: false,
      redirectUrl: '#'
    },
    logout: {
      content: `<h1>Fitur AI</h1><p>Fitur ini sedang dalam proses pengembangan. Harap bersabar.</p>`,
      isCompleted: 'index.php',
      redirectUrl: 'index.php'
    },
  };
  
// Menambahkan event listener untuk setiap menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah link membuka halaman baru
  
      const id = this.id; // Menangkap id menu yang diklik
      const menuItem = menuItems[id];
  
      // Jika fitur sudah selesai, arahkan ke halaman baru
      if (menuItem.isCompleted) {
        window.location.href = menuItem.redirectUrl; // Arahkan ke halaman lain
      } else {
        // Jika fitur sedang dalam pengembangan, tampilkan pesan
        document.getElementById('content-area').innerHTML = menuItem.content;
      }
    });
  });
  