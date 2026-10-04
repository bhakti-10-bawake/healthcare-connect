document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       GLOBAL NAVIGATION
       ========================================= */

    // Prevent empty "#" links from jumping to the top
    document.querySelectorAll('a[href="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

    });


    /* =========================================
       LOGOUT
       ========================================= */

    document.querySelectorAll("[data-logout]").forEach(function (button) {

        button.addEventListener("click", function () {

            const confirmLogout =
                confirm("Are you sure you want to log out?");

            if (confirmLogout) {
                window.location.href = "login.html";
            }

        });

    });


    /* =========================================
       BACK BUTTONS
       ========================================= */

    document.querySelectorAll("[data-go-back]").forEach(function (button) {

        button.addEventListener("click", function () {

            window.history.back();

        });

    });


    /* =========================================
       NOTIFICATION BUTTONS
       ========================================= */

    document.querySelectorAll("[data-notifications]").forEach(function (button) {

        button.addEventListener("click", function () {

            alert("You currently have no new notifications.");

        });

    });

});