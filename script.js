// Butonlara tıklama olayını dinliyoruz
const buttons = document.querySelectorAll('.script-button');
const linkOutput = document.getElementById('link');
const confirmationPopup = document.getElementById('confirmation-popup');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
let currentLink = "";

// Her butona tıklanıldığında, ilgili linki input alanına ekleyelim
buttons.forEach(button => {
    button.addEventListener('click', function() {
        currentLink = this.getAttribute('data-link');
        linkOutput.value = currentLink;
        confirmationPopup.style.display = 'flex';  // Pop-up'ı gösteriyoruz
    });
});

// Evet butonuna tıklanırsa, link'e yönlendirelim
confirmYes.addEventListener('click', function() {
    window.location.href = currentLink;
});

// Hayır butonuna tıklanırsa, pop-up'ı gizleyelim
confirmNo.addEventListener('click', function() {
    confirmationPopup.style.display = 'none';
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
