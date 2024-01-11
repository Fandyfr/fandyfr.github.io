function updateCountdown() {
            // Get the current date and time
            var now = new Date().getTime();

            // Calculate the remaining time
            var distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // If the countdown is over, display a surprise message
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("countdown").style.display = "none";
                document.getElementById("surprise").style.display = "block";
            }
        }

        // Get countdown date from local storage
        var storedCountDownDate = localStorage.getItem("countDownDate");

        // Set the date we're counting down to (replace with your birthday)
        var countDownDate = storedCountDownDate ? parseInt(storedCountDownDate) : new Date().getTime() + (4 * 24 * 60 * 60 * 1000); // 4 days in milliseconds

        // Update the countdown every 1 second
        var interval = setInterval(updateCountdown, 1000); // Update every 1 second

        // Save countdown date to local storage
        localStorage.setItem("countDownDate", countDownDate.toString());