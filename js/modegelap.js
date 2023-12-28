document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('modegelapSwitch');
    darkModeSwitch.addEventListener('change', toggleDarkMode);

    // Check the user's preference in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('mode-gelap');
      darkModeSwitch.checked = true;
    }

    function toggleDarkMode() {
      const isDarkMode = modegelapSwitch.checked;
      
      if (isDarkMode) {
        document.body.classList.add('mode-gelap');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.body.classList.remove('mode-gelap');
        localStorage.setItem('darkMode', 'disabled');
      }
    }
  });