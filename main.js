// Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript. Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.
// N.B.: nessuna modifica consentita a HTML o CSS

function dropped() {
  $(".hamburger-menu").show();
}

function dropped2(){
  $(".hamburger-menu").hide();
}

function init() {
$('.fa-bars').click(dropped);
$('.fa-times').click(dropped2);
}

init();
