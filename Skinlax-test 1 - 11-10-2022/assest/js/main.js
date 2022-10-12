$(document).ready(function(){
  $('.menu-nav .menu').click(function(){
    $('.menu-nav .menu').toggleClass('active')
    $('#head .social .list-item').slideToggle('slow');
  })
  
  $('.nav-item').click(function(){
    $('.nav-item').toggleClass('active')
    $('.dropdown').slideToggle('slow');
  })
 
});