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







