
// solution 1

var plus = document.querySelectorAll('.increment');
var moins = document.querySelectorAll('.decrement');
var value = document.querySelectorAll('.value');
var heart = document.querySelectorAll('.heart');
var produit = document.querySelectorAll('.produit')
var remove = document.querySelectorAll('.remove')
var total = document.querySelector('.total')
var prix = document.querySelectorAll('.prix')



let i0 = 1;
let i1 = 1;
let i2 = 1;


// produit 1
plus[0].addEventListener('click' , ()=>{
    i0++
    value[0].textContent=i0
    totales();
 
    }
)
moins[0].addEventListener('click' , ()=>{
    if (i0 >0) {
        
    
        i0--
        value[0].textContent=i0
        totales()
    }
    }
);

heart[0].addEventListener('click', ()=>{
    if(heart[0].style.color=== 'red'){
        heart[0].style.color = 'gray';
    }else{
        heart[0].style.color = 'red';
    }
})

// produit 2
plus[1].addEventListener('click' , ()=>{
    i1++
    value[1].textContent=i1
   
    totales()
 
    }
)
moins[1].addEventListener('click' , ()=>{
    if (i1 >0) {
        
    
        i1--
        value[1].textContent=i1
      
        totales()
    }
    }
);

heart[1].addEventListener('click', ()=>{
    if(heart[1].style.color=== 'red'){
        heart[1].style.color = 'gray';
    }else{
        heart[1].style.color = 'red';
    }
})

// produit 3

plus[2].addEventListener('click' , ()=>{
    i2++
    value[2].textContent=i2
   
    totales()
 
    }
)
moins[2].addEventListener('click' , ()=>{
    if (i2 >0) {
        
        i2--
        value[2].textContent=i2
       
        totales()
     
    }
    
    }
);

heart[2].addEventListener('click', ()=>{
    if(heart[2].style.color=== 'red'){
        heart[2].style.color = 'gray';
    }else{
        heart[2].style.color = 'red';
    }
})

remove[0].addEventListener('click', ()=>{
    produit[0].remove()
})
remove[1].addEventListener('click', ()=>{
    produit[1].remove()
})
remove[2].addEventListener('click', ()=>{
    produit[2].remove()
})



//total
let totalPrice =0;
function totales() {
    let produit1 = prix[0].innerHTML;
    let produit2 =prix[1].innerHTML;
    let produit3 =prix[2].innerHTML;
   
    const totalPrice =   i0*produit1 + i1 * produit2 + i2 * produit3;
    total.textContent = totalPrice
}



