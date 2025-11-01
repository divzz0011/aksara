// 🌟 WELCOME SCREEN LOGIC
document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const mainContent = document.getElementById("main-content");
    const enterBtn = document.getElementById("enter-btn");
  
    // 🖱️ Tombol “Masuk”
    enterBtn.addEventListener("click", () => {
      welcomeScreen.classList.add("fade-out");
      setTimeout(() => {
        welcomeScreen.style.display = "none";
        if (mainContent) mainContent.style.display = "block";
      }, 1000);
    });
  
    // ⏱️ Otomatis masuk setelah 3 detik
    setTimeout(() => {
      if (welcomeScreen.style.display !== "none") {
        welcomeScreen.classList.add("fade-out");
        setTimeout(() => {
          welcomeScreen.style.display = "none";
          if (mainContent) mainContent.style.display = "block";
        }, 1000);
      }
    }, 3000);
  });
  
  // ⚙️ WEBSITE MAIN FUNCTIONALITY
  document.addEventListener("DOMContentLoaded", () => {
    // 🗓️ Tahun otomatis di footer
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // 💬 Nomor WhatsApp perusahaan
    const whatsappNumber = "628123456789"; // ganti dengan nomor WA bisnis kamu
  
    // 🟩 Tombol “Pesan via WhatsApp”
    document.querySelectorAll(".package button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const packageName = btn.dataset.package;
        const message = encodeURIComponent(
          `Halo Aksara Wisata, saya tertarik dengan paket ${packageName}. Mohon info lebih lanjut.`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      });
    });
  
    // 📱 Toggle menu untuk tampilan mobile
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav");
  
    toggle.addEventListener("click", () => {
      nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
  });
  
  // 🔍 FITUR PENCARIAN PAKET
  const searchInput = document.getElementById("searchInput");
  const packages = document.querySelectorAll(".package");
  
  searchInput.addEventListener("keyup", function () {
    const query = this.value.toLowerCase();
  
    packages.forEach((pkg) => {
      const text = pkg.innerText.toLowerCase();
      pkg.style.display = text.includes(query) ? "block" : "none";
    });
  });
  