// game.js

// Tüm script butonlarına tıklanma işlevselliği ekle
const scriptButtons = document.querySelectorAll('.scriptButton');

// Her butonun data-url özelliğinden yönlendirme yapılacak linki al ve tıklama işlemi yapıldığında yönlendir
scriptButtons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url'); // Butondan URL al
        const confirmation = confirm("Bu linke gitmek istiyor musunuz?"); // Kullanıcıya onay sor
        if (confirmation) {
            window.location.href = url; // Eğer evet dediyse, linke yönlendir
        }
    });
});
