const swiper_news = new Swiper('.swiper_news    ', {
    // Optional parameters
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
    },
    spacebeetween: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: -90,
        depth: 170,
    },
    navigation: {
        nextEl: '.swiper_next',
        prevEl: '.swiper_prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },

    },


});

const swiper_precious = new Swiper('.swiper_precious ', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 15,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper_precious_next',
        prevEl: '.swiper_precious_prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

    },
});

const swiper_price = new Swiper('.swiper_price ', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 15,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper_price_next',
        prevEl: '.swiper_price_prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

    },


});

const swiper_completed = new Swiper('.swiper_completed ', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 15,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper_completed_next',
        prevEl: '.swiper_completed_prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

    },

});
const swiper_reviews = new Swiper('.swiper_reviews ', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
        clickable: true,
        el: '.swiper_reviews_pagination',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper_reviews_next',
        prevEl: '.swiper_reviews_prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        700: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

    },

});
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelectorAll('.reviews .item_text p');
    const readMoreButton = document.getElementById('read-more');
    console.log(readMoreButton, textElement)
    // Проверяем, есть ли переполнение текста
    textElement.forEach((elem) => {
        const lineHeight = parseInt(window.getComputedStyle(elem).lineHeight);
        const maxLines = 5; // Максимальное количество строк
        console.log(lineHeight)
        console.log(elem.scrollHeight, elem.clientHeight)
        if (elem.scrollHeight > lineHeight * maxLines) {
            elem.classList.add('ellipsis'); // Добавляем три точки
        }
    })

});
