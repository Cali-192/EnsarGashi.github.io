const navToogle = document.querySelector(".eg-hamburger-menu");
const navList = document.querySelector(".eg-nav");

navToogle.addEventListener("click", function (e) {
e.preventDefault(); 
navList.classList.toggle("eg-show");
})

function rate(stars) {
    const ratingStars = document.querySelectorAll('.eg-star');
    ratingStars.forEach((star, index) => {
    
        star.innerHTML = (index < stars) ? '&#9733;' : '&#9734;';
    });

    alert(`You rated: ${stars} stars`);


    const rateMessage = document.getElementById('rate-message');
    rateMessage.style.display = 'block';
    rateMessage.textContent = "Thank you for your rate, I appreciate it!";
}


const stars = document.querySelectorAll('.eg-star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const starValue = parseInt(star.getAttribute('data-star'));
        rate(starValue);
    });
});

const eg_scrollTopBtn = document.getElementById('eg-scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        eg_scrollTopBtn.style.display = "flex";
    } else {
        eg_scrollTopBtn.style.display = "none";
    }
};

eg_scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
document.getElementById('eg-showAlertBtn').addEventListener('click', function() {
    const eg_alert = document.getElementById('eg-dynamicAlert');
    eg_alert.style.display = 'block';
    eg_alert.classList.add('show');
});
