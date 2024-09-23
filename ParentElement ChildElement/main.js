const link=document.querySelector('section');
console.log(link.children);
console.log(Array.from(link.children));


Array.from(link.children).forEach(child =>{

child.classList.add('section-element');

})

const baslik=document.querySelector('h2');
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);
console.log(baslik.nextElementSibling);
console.log(baslik.previousElementSibling);

console.log(baslik.previousElementSibling.parentElement.children);
console.log(baslik.parentElement);