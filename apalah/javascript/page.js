// Data anggota portofolio
const portfolios = [
    { name: "Akhmad Irvan Ferdiansyah", description: "Deskripsi portofolio 1", img: "imgHome.jpeg", link: "listporto1.php" },
    { name: "Affrila Ade Poernama", description: "Deskripsi portofolio 2", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Mochamad Chevin Amrulloh Assidiq", description: "Deskripsi portofolio 3", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Arinda Putri Agustin", description: "Deskripsi portofolio 4", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Lola Purwaningrum", description: "Deskripsi portofolio 5", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Ririn Apriliya Yatno", description: "Deskripsi portofolio 6", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Adinda Aniswa Azakiya", description: "Deskripsi portofolio 7", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Mohammad Faisal Abdillah", description: "Deskripsi portofolio 8", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Ramadhan Gymnastiar", description: "Deskripsi portofolio 9", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Muhammad Sholakhhuddin Al Khafid", description: "Deskripsi portofolio 10", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Arga Raihan Andharu", description: "Deskripsi portofolio 11", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Faliq Fajar Mudzaky", description: "Deskripsi portofolio 12", img: "https://via.placeholder.com/100", link: "#" },
    { name: "M. Alif Fathurrahman .A", description: "Deskripsi portofolio 13", img: "https://via.placeholder.com/100", link: "#" },
    { name: "M. Nasirul", description: "Deskripsi portofolio 14", img: "https://via.placeholder.com/100", link: "#" },
];

// Tampilkan daftar portofolio
const portfolioList = document.getElementById("portfolioList");

portfolios.forEach((portfolio) => {
    const listItem = document.createElement("li");
    listItem.classList.add("portfolio-item");
    listItem.innerHTML = `
        <img src="${portfolio.img}" alt="${portfolio.name}">
        <h4>${portfolio.name}</h4>
        <p>${portfolio.description}</p>
        <a href="${portfolio.link}" target="_blank">Lihat Detail</a>
    `;
    portfolioList.appendChild(listItem);
});
