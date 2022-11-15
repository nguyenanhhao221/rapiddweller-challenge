function openLangModal() {
    let modal = document.getElementById("langModal");

    if (modal.className === 'hide') {
        modal.className = 'lang-options';
    } else {
        modal.className = 'hide';
    }
}

function handleMenu() {

    let ham_icon = document.getElementById("ham_icon");
    let item_menu = document.getElementById("nav-menu").childNodes;

    if (document.body.style.overflow === '') {
        document.body.style.overflow = "hidden";

        item_menu.forEach(item => {

            item.addEventListener('click', event => {
                if (!item.className.includes('menu-item-has-children')) {
                    ham_icon.checked = false;
                    document.body.style.overflow = '';
                }
            })
        })

    }
    else {
        document.body.style.overflow = '';

    }
}





