//alert("hey responsive website");

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  shoppinCart.classList.remove('active');
  loginBtn.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppinCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  shoppinCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginBtn.classList.remove('active');
    navbar.classList.remove('active');
}

let loginBtn = document.querySelector('.login-btn');

document.querySelector('#user-btn').onclick = () =>{
  loginBtn.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppinCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppinCart.classList.remove('active');
  loginBtn.classList.remove('active');

}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppinCart.classList.remove('active');
    loginBtn.classList.remove('active');
      navbar.classList.remove('active');
}
