document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navlink');
    const slider = document.getElementById('slider');

    function moveSlider(element) {
        const rect = element.getBoundingClientRect();
        const navbarRect = document.querySelector(".nav").getBoundingClientRect();
        slider.style.width = `${rect.width + 10}px`; // Set slider width to the nav item width
        slider.style.left = `${rect.left - (navbarRect.left + 5)}px`; // Set slider position to the nav item position
        element.classList.remove('text-black');
        element.classList.add('text-white');
    }


    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // event.preventDefault(); //prevent default action

            //MOve the slider to the selected item
            moveSlider(link);

            if (links[0] == link) {
                // console.log(link.nextElementSibling)
                links[1].classList.remove('text-white');
                links[1].classList.add('text-black');
            } else {
                console.log(links[0]);
                links[0].classList.remove('text-white');
                links[0].classList.add('text-black');
            }
        });
    });
    moveSlider(links[0]);
    // Recalculate slider position on window resize to handle responsive changes
    window.addEventListener('resize', function () {
        const activeLink = document.querySelector('.nav-link.active'); // Find the currently active link
        if (activeLink) {
            moveSlider(activeLink); // Move the slider to the active link on resize
        } else {
            moveSlider(links[0]); // Default to the first link if no active one is found
        }
    });
});