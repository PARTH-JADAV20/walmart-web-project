const item = document.querySelector('#item_dilvery');

item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#002d58'; 
});
item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'rgb(0, 79, 154)'; 
});


const srchicon = document.querySelector('#srchicon');

srchicon.addEventListener('mouseover', () => {
    srchicon.style.backgroundColor = '#002d58'; 
});
srchicon.addEventListener('mouseout', () => {
    srchicon.style.backgroundColor = 'rgb(0, 79, 154)'; 
});


const hov1 = document.getElementsByClassName('hov1'); 


for (let element of hov1) {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgb(0, 79, 154)';
    });
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '';
    });
}


const hov2 = document.querySelector('#hov2');

hov2.addEventListener('mouseover', () => {
    hov2.classList.add('hov20');
});

hov2.addEventListener('mouseout', () => {
    hov2.classList.remove('hov20');
});

const hov3 = document.querySelector('#hov3');

hov3.addEventListener('mouseover', () => {
    hov3.classList.add('hov20');
});

hov3.addEventListener('mouseout', () => {
    hov3.classList.remove('hov20');
});


const underline1 = document.getElementsByClassName('underline1'); 


for (let element2 of underline1) {
    element2.addEventListener('mouseover', () => {
        element2.style.textDecoration = 'underline' ;
    });
    element2.addEventListener('mouseout', () => {
        element2.style.textDecoration = '';
    });
}





const searchButton = document.getElementById('cdtxt01');
const clickCountDisplay = document.getElementById('zeroitems');

let clickCount = parseInt(localStorage.getItem('searchClickCount')) || 0;

clickCountDisplay.textContent = clickCount;

searchButton.addEventListener('click', () => {
    clickCount += 1;

    localStorage.setItem('searchClickCount', clickCount);
    if(clickCount>10){
        localStorage.clear()
        clickCount=0;
    }

    clickCountDisplay.textContent = clickCount;
});



const items2 = document.querySelectorAll('.cdtxt03');

items2.forEach(item2 => {
    item2.addEventListener('mouseover', () => {
        console.log("hi");
        item2.style.textDecoration = 'none';
    });

    item2.addEventListener('mouseout', () => {
        item2.style.textDecoration = 'underline'; 
    });
});




const cardlist = document.querySelector(".card-list"),
      firstli = cardlist.querySelectorAll("li")[0],
      cardArrowIcons = document.querySelectorAll("#right2, #left2");
      console.log(cardlist);

let firstLiWidth = firstli.clientWidth + 1220;
let cardScrollWidth = cardlist.scrollWidth - cardlist.clientWidth;

const showHideCardIcons = () => {
   cardArrowIcons[0].style.display = cardlist.scrollLeft === 0 ? "none" : "block";
   cardArrowIcons[1].style.display = cardlist.scrollLeft + cardlist.clientWidth >= cardlist.scrollWidth - 1? "none": "block";
};

cardArrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left2" ? -firstLiWidth : firstLiWidth;
        cardlist.scrollLeft += scrollAmount;
        setTimeout(showHideCardIcons, 60);
    });
});

showHideCardIcons();




