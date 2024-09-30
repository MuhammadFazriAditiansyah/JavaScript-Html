function showCountdown() {
    let count = 5;
    const alertBox = document.getElementById('countdownAlert');
    alertBox.style.display = 'block';
    alertBox.innerText = `Danger ! Menghitung mundur: ${count}`;

    const countdown = setInterval(function() {
        count--;
        if (count >= 1) {
            alertBox.innerText = `Danger ! Menghitung mundur: ${count}`;
        } else {
            clearInterval(countdown);
            alertBox.style.display = 'none';
        }
    }, 1000);
}