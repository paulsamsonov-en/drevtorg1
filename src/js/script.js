window.addEventListener(`DOMContentLoaded`, () => {
    //--галерея во всю страницу(запуск по ссылке и клик на крупное изображение)--//
    let openSlide = function(i = 0) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
                src: 'src/img/slider/1.jpg',
                w: 1200,
                h: 900
            },
            {
                src: 'src/img/slider/2.jpeg',
                w: 1200,
                h: 900
            },
            {
                src: 'src/img/slider/3.jpg',
                w: 1200,
                h: 900
            },
            {
                src: 'src/img/slider/4.jpg',
                w: 1200,
                h: 900
            },
            {
                src: 'src/img/slider/5.jpg',
                w: 1200,
                h: 900
            }
        ];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: i // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }
    document.querySelector(".gallery_title_subtitle_item").onclick = openSlide;


    //---мини-галерея на странице--//

    const tabs = document.querySelectorAll(".tabheader__item"),
        tabContent = document.querySelectorAll(".gallery_smoll_items"),
        tabContentPrew = document.querySelectorAll(".gallery_prew_items"),
        tabsParent = document.querySelector(".tabheader__items");
    const slidActiveParent = document.querySelector(".gallery_smoll"),
        slidActive = document.querySelectorAll(".gallery_smoll_img");



    function hideTabContent() {
        tabContent.forEach(cont => {

            cont.classList.add("hide");
            cont.classList.remove("show", "fade", "gallery_smoll_items_active");
        })
        tabContentPrew.forEach(cont => {

            cont.classList.add("hide");
            cont.classList.remove("show", "fade", "gallery_prew_items_active");
        })
        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active");
        });
    }


    function ShowContent(i = 0) {

        tabContent[i].classList.add("show", "fade", "gallery_smoll_items_active");
        tabContent[i].classList.remove("hide");

        for (b = 0; b < 2; b++) {
            if (i == (tabContentPrew.length - 1)) {
                tabContentPrew[b].classList.add("show", "fade", "gallery_prew_items_active");
                tabContentPrew[b].classList.remove("hide");

            } else {
                tabContentPrew[i + b].classList.add("show", "fade", "gallery_prew_items_active");
                tabContentPrew[i + b].classList.remove("hide");
            }
        }
        tabs[i].classList.add("tabheader__item_active");
    }
    hideTabContent();
    ShowContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {

            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    ShowContent(i);
                }
            });
        }
    })


    slidActiveParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains("gallery_smoll_img")) {
            slidActive.forEach((item, i) => {
                if (target == item) {
                    openSlide(i);
                }

            });
        }

    });



});