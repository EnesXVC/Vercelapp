// Butonlara tıklama olayını dinliyoruz
const buttons = document.querySelectorAll('.script-button');
const linkOutput = document.getElementById('link');
const goButton = document.getElementById('goButton');

// Her butona tıklanıldığında, ilgili linki input alanına ekleyelim
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        linkOutput.value = link;
    });
});

// Git butonuna tıklanıldığında, input'taki URL'ye yönlendirelim
goButton.addEventListener('click', function() {
    const url = linkOutput.value;
    if (url) {
        window.location.href = url;  // Kullanıcıyı belirtilen URL'ye yönlendirecek
    }
});

// Arama fonksiyonu
function filterButtons() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    buttons.forEach(button => {
        const buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(searchTerm)) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
        }
    });
}
