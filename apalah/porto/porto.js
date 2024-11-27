// script.js

// Membuka modal dengan gambar yang diklik
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex"; // Tampilkan modal
    modalImage.src = image.src; // Set gambar modal sesuai gambar yang diklik
}

// Menutup modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll(".project-card a");
    projectLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Fitur ini masih dalam pengembangan!");
        });
    });
});
