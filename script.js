let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

/*order*/ 

function addFood() {
  var food = document.getElementById("food").value;
  if (food.trim() !== "") {
    var orderList = document.getElementById("order-list");
    var li = document.createElement("li");
    li.innerText = food;
    orderList.appendChild(li);
    document.getElementById("food").value = "";
  }
}
/*order */ 
function addToOrder() {
  const foodItem = document.getElementById("food-item").value;
  const quantity = document.getElementById("quantity").value;

  const orderList = document.getElementById("order-list");
  const newOrderItem = document.createElement("li");
  newOrderItem.textContent = `${quantity} x ${foodItem}`;
  orderList.appendChild(newOrderItem);
}
