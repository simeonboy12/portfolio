const darkButton = document.getElementById("darkMode");

darkButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkButton.textContent = "☀️ Light Mode";

    } else {

        darkButton.textContent = "🌙 Dark Mode";

    }

});
