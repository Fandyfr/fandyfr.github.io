function updateCountdown() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("countdown").style.display = "none";
                document.getElementById("surprise").style.display = "block";
            }
}

var storedCountDownDate = localStorage.getItem("countDownDate");
var countDownDate = storedCountDownDate ? parseInt(storedCountDownDate) : new Date().getTime() + (4 * 24 * 60 * 60 * 1000); // 4 days in milliseconds
var interval = setInterval(updateCountdown, 1000);
localStorage.setItem("countDownDate", countDownDate.toString());

function openWhatsApp() {
    var phoneNumber = '6281977522517';
    var message = 'Selamat ulang tahun Fandy! 🎉 Semoga tahun ini penuh kebahagiaan dan sukses.';
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappLink, '_blank');
}
