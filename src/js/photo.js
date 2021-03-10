//tabs
const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".gallery_smoll_items"),
    tabContentPrew = document.querySelectorAll(".gallery_prew_items"),
    tabsParent = document.querySelector(".tabheader__items");

console.dir(tabs);
console.dir(tabContent);
console.dir(tabsParent);

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
            console.log(i);
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
        console.log("click");
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                ShowContent(i);
            }
        });
    }
})