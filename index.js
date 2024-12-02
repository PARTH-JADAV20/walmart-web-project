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
