document.getElementById('startButton').onclick = function() {
    document.getElementById('greetingCard').style.display = 'flex';
    document.getElementById('startButton').style.display = 'none';
};

document.getElementById('nextButton').onclick = function() {
    const card = document.getElementById('greetingCard');
    card.innerHTML = `
        <div class="decorations"></div>
        <h2>Selamat Natal dan Tahun Baru 2025!</h2>
        <img src="Images/oke.png" alt="Natal" class="card-image">
        <p>
        Semoga di hari Natal ini dan juga tahun baru nanti dapat membawa kedamaian, kebahagiaan, dan kasih sayang dalam keluarga Bapak dan Ibu sekeluarga.</p>
    `;
    document.getElementById('music').play();
};

// Mendapatkan elemen audio
const music = document.getElementById('music');

// Memutar audio saat halaman dimuat
window.onload = function() {
    music.play();
};