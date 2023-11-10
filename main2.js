

// solution 1


//function increment
function plus(event) {
  var  p=event.target.parentNode.querySelector('.value').innerHTML
  var pls=Number(p)+1
  event.target.parentNode.querySelector('.value').innerHTML=pls;
  totales()  //apel function total
 
}
//function decrement 
function moin(event) {
   var  m=event.target.parentNode.querySelector('.value').innerHTML
   if(Number(m) > 0){
     mon=Number(m)-1
}
   event.target.parentNode.querySelector('.value').innerHTML=mon;
   totales() // apel function total
   
 
 }
//function heart:
 function like(event){
  heart = event.target.parentNode.querySelector('.heart')
  if(heart.style.color=== 'red'){
    heart.style.color = 'gray';
}else{
    heart.style.color = 'red';
}

 }
 totales()
//function sum  total :
 function totales() {
    var total = document.querySelector('.total')
    var prix = document.querySelectorAll('.prix')
 
    
    var value = document.querySelectorAll('.value');

 
    sum= 0
    total.textContent= prix[0].innerHTML*value[0].innerHTML
    for (let i = 0; i < prix.length; i++) {
       
        sum =sum  + (prix[i].innerHTML * value[i].innerHTML)
    
       
    }
   
    total.textContent = `Total : $${sum}`;
}
//function remove product
function removeitem(event) {
    remove=event.target.parentNode.parentNode.remove()
    
}