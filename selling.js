

//menu buttonuna click edende kenardan nav cixsin,x-i vuranda yoxolsun
let button=document.querySelector(".menu-button")
let navigation=document.querySelector(".navigation")
let headerTop=document.querySelector(".header-top")
let headerBottom=document.querySelector(".header-bottom")
let close=document.querySelector(".close-icon")



    button.addEventListener("click",function () {
    navigation.style.display="block"
    })
   

    close.addEventListener("click",function(){
    navigation.style.display="none"
    })
//menu buttonuna click edende kenardan nav cixsin,x-i vuranda yoxolsun










// click=0
// length=1
// button.addEventListener("click",function () {
//     for (let i = 0; i < length; i++) {
//         if (click%2==0) {
//             navigation.style.display="block"
//             navigation.style.right=0+"px"
//         }
//         else{
//             navigation.style.display="none"

//         }
//         click++
//     }
// })






//bu eseblerimi korlayan scrollun js kodudu(scrolu 50px asagi edende header-bottom yox olur,header-top position:fixed olur)

window.onscroll = function() {myFunction()};

function myFunction() {
  if ( document.documentElement.scrollTop > 50){
         headerTop.style.display="none";
         headerBottom.style.position="fixed"
         headerBottom.style.top=0
         headerBottom.style.right=0
         headerBottom.style.left=0
         headerBottom.style.backgroundColor="white"       
} 
else if( document.documentElement.scrollTop < 50){
        headerTop.style.display="block";
        headerBottom.style.position="relative"
}
}
//bu eseblerimi korlayan scrollun js kodudu(scrolu 50px asagi edende header-bottom yox olur,header-top position:fixed olur)




//bu local storage ile add olunan cardlarin js kodudu

let product1=new Product(1,"././images/card1.jpg")
let product2=new Product(2,"././images/card2.jpg")
let product3=new Product(3,"././images/card3.jpg")
let product4=new Product(4,"././images/card4.jpg")
let product5=new Product(5,"././images/card5.jpg")
let product6=new Product(6,"././images/card6.jpg")

let products=[product1,product2,product3,product4,product5,product6]


function FillProducts() {
    for (const product of products) {
    let col4= $("<div>")
    col4.addClass("col-lg-4 col-md-4")
    col4.addClass("card-col")
    let cardDiv=$("<div>")
    cardDiv.addClass("card")
    let imgDiv=$("<div>")
    imgDiv.addClass("img-div")
    let img1=$("<img>")
    img1.addClass("card-img-top").attr("src",product.Image)
    let cardBody=$("<div>")
    cardBody.addClass("card-body text-center")
    let tittle=$("<div>")
    tittle.addClass("card-tittle")
    tittle.text("Wild West Hoodie")

img1.appendTo(imgDiv)
imgDiv.appendTo(cardDiv)
cardDiv.appendTo(col4)
tittle.appendTo(cardBody)
$(".card-row").append(col4)
  




    


    let ul=$("<ul>")
    let li1=$("<li>")
    let li1a=$("<a>")
    let li1aicon=$("<i>")
    li1aicon.addClass("fas fa-star")
    let li1aspan=$("<span>")
    li1aspan.text("5.0")

li1aicon.appendTo(li1a)
li1aspan.appendTo(li1a)
li1a.appendTo(li1)
li1.appendTo(ul)
ul.appendTo(cardBody)
cardBody.appendTo(cardDiv)




    let li2=$("<li>")
    let li2a=$("<a>")
    let li2aicon=$("<i>")
    li2aicon.addClass("fas fa-heart")
    let li2aspan=$("<span>")
    li2aspan.text("29")


li2aicon.appendTo(li2a)
li2aspan.appendTo(li2a)
li2a.appendTo(li2)
li2.appendTo(ul)
ul.appendTo(cardBody)
cardBody.appendTo(cardDiv)
    




    let p=$("<p>")
    p.text("Lorem ipsum dolor sit amet, consectetur adipisicing.")

p.appendTo(cardBody)


    let buttonsDiv=$("<div>")
    buttonsDiv.addClass("card-buttons")
    let cardButton=$("<a>")
    cardButton.addClass("card-button")
    cardButton.text("card")
    let viewButton=$("<a>")
    viewButton.addClass("view-button")
    viewButton.text("view")



cardButton.appendTo(buttonsDiv)
viewButton.appendTo(buttonsDiv)
buttonsDiv.appendTo(cardBody)


    }
}

FillProducts()

//bu local storage ile add olunan cardlarin js kodudu



// bu countDownun kodlaridi
let week=document.querySelector(".week")
let day=document.querySelector(".day")
let hour=document.querySelector(".hour")
let minute=document.querySelector(".minute")
let second=document.querySelector(".second")

var sonzaman = new Date("Fri May 20, 2021 23:58:31").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var ferq = sonzaman - now;
  var weeks=Math.floor(ferq/(7*24*60*60*1000))
  var days=Math.floor((ferq % (7*24*60*60*1000)) /(24*60*60*1000))
  var hours = Math.floor((ferq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((ferq % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((ferq % (1000 * 60)) / 1000);
week.innerHTML=weeks +`<br>`+`<p>week</p>`
day.innerHTML=days +`<br>`+`<p>day</p>`
hour.innerHTML=hours +`<br>`+`<p>hr</p>`
minute.innerHTML=minutes +`<br>`+`<p>min</p>`
second.innerHTML=seconds +`<br>`+`<p>sec</p>`


    
  if (ferq < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// bu countDownun kodlaridi


//slidenin js kodu-- yaza bilsem))))

//slidenin js kodu-- yaza bilsem))))










console.log("salam");
