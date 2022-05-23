const tabcontent = document.querySelectorAll('.tabcontent'),
      tabHeaderItems = document.querySelectorAll('.tabheader__items'),
      tabHeaderItem = document.querySelectorAll('.tabheader__item');

function contentHide(content, item) {
    content.forEach(element => {
        element.style.display = 'none';
    });

    item.forEach((element, i) => {
        if (element.innerHTML == 'Фитнес') {
            content[i].style.display = 'block';
        } else {
        element.classList.remove('tabheader__item_active');
        }
    });
}

function tabsClicking(content, item) {
    item.forEach((element, i) => {
        element.addEventListener('click', (e) =>{
            e.preventDefault();
            console.log(element);
            
            for (let index of content) {
                index.style.display = 'none';
                console.log(element.classList);
            }
            for (let index of item) {
                index.classList.remove('tabheader__item_active');
            }
            element.classList.add('tabheader__item_active');
            content[i].style.display = 'block';
            console.log(element);
        });
    });
}





contentHide(tabcontent, tabHeaderItem);
tabsClicking(tabcontent, tabHeaderItem);