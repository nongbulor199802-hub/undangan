// Mengontrol musik secara otomatis saat halaman dimuat
window.onload = function() {
    const music = document.getElementById('background-music');
    // Coba putar musik. Jika browser memblokir, pengguna harus mengklik tombol putar
    music.play().catch(error => {
        console.log("Autoplay blocked. User must interact to play music.");
    });
};

// Hitungan Mundur (Countdown Timer)
const weddingDate = new Date("September 27, 2025 08:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "ACARA SEDANG BERLANGSUNG";
    }
}, 1000);

// Efek Animasi (Fade-in saat di-scroll)
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});