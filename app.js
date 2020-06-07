// Chapter 1

// Question # 1

alert("Welcome to my site");

//Question # 2

alert("Error! Please enter a valid password");

//Question # 3

alert("Welcome to JS land..\nHappy Coding!");

// Question # 4

alert("Welcome to JS land..");
confirm("Happy Coding!\nPrevent this page from creating additional dialogs.");

// Question # 5

// Question # 6

//Question # 7


// Chapter-2

// Question # 1

alert("Welcome to my site");

//Question # 2

alert("Error! Please enter a valid password");

//Question # 3

alert("Welcome to JS land..\nHappy Coding!");

// Question # 4

alert("Welcome to JS land..");
confirm("Happy Coding!\nPrevent this page from creating additional dialogs.");

// Question # 5

// Question # 6

//Question # 7


// chapter 3

// Question #1

var age = 19
alert("my age is " + age + " years old");

//Question # 2


var myStorage = window.localStorage;
var n = myStorage.getItem('no_of_times_visited');

function site_visited()
{
   if (n == null || n == NaN || n == undefined)
   {
       n = 0;
       myStorage.setItem('no_of_times_visited',n);
   }
   else{
       n++;
       myStorage.setItem('no_of_times_visited',n);
   }
}

site_visited();
alert("You have visited this site " + myStorage.getItem('no_of_times_visited') + " times");




// Question # 3

var birthYear = 2000;
var p = document.createElement("p");
p.innerText=(`My birthyear is ${birthYear}.\nDatatype of any declared variable is number.`);
document.body.append(p);


// Question # 4


var visitorName = 'Sara';
var productTitle = 'T-shirts';
var quantity = 5;


var p = document.createElement("p");
p.innerText=(`${visitorName} ordered ${quantity}  ${productTitle} on XYZ Clothing store`);
document.body.append(p);

// chapter-5

// Question # 1  // Question # 2

var body = (` 
<input type="text">
<input type="text">
<br>
<br>
<button>ADD</button>
<button>SUBTRACT</button>
<button>MULTIPLY</button>
<button>DIVIDE</button>

<p></p>`);

document.body.innerHTML = body;

var numbers = document.querySelectorAll("input");
var button = document.querySelectorAll('button');
var p = document.querySelector("p");
button[0].addEventListener('click',adding);
button[1].addEventListener('click',subtracting);
button[2].addEventListener('click',multiplying);
button[3].addEventListener('click',dividing);



function adding(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) + parseInt(num2);
    p.innerText=(`Sum of ${num1} and ${num2} is ${result}`);
}

function subtracting(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) - parseInt(num2);
    p.innerText=(`Subtraction of ${num1} and ${num2} is ${result}`);
}

function multiplying(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) * parseInt(num2);
    p.innerText=(`Multiplication of ${num1} and ${num2} is ${result}`);
}

function dividing(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) / parseInt(num2);
    p.innerText=(`Division of ${num1} and ${num2} is ${result}`);
}


// Question # 3

var temp;

var p1 = document.createElement("p");
p1.innerText=(`Value of variable after declaration is ${temp}`);
document.body.append(p1);

temp = 5;
p1.innerText = p1.innerText.concat(`\ninitial value is : ${temp}`);

temp++;
p1.innerText = p1.innerText.concat(`\nValue after increment is : ${temp}`);

temp = temp + 7;
p1.innerText = p1.innerText.concat(`\nValue after addition is : ${temp}`);

temp--;
p1.innerText = p1.innerText.concat(`\nValue after decrement is : ${temp}`);


temp = temp % 3;
p1.innerText = p1.innerText.concat(`\nThe remainder is : ${temp}`);


// Question # 4

var ticketPrice = 600;

var p2 = document.createElement("p");
p2.innerText=(`Total price to buy  5 tickets  for movie is ${ticketPrice* 5}PKR`);
document.body.append(p2);

//Question # 5

var p3 = document.createElement("p");

var table_num = 4;
for(var i=1; i<=10; i++)
{
    p3.innerText = p3.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
    document.body.append(p3);
}

//Question # 6


var temp_centigrade = 25;
var temp_fahrenheit = 70;

var celsius = (temp_fahrenheit - 32) * (5/9);
var fahrenheit = (temp_centigrade * 9/5 ) + 32;


var p4= document.createElement("p");
var p5= document.createElement("p");
p4.innerText=(`${temp_centigrade}C is ${fahrenheit}F`);
p5.innerText=(`${temp_fahrenheit}F is ${celsius}C`);
document.body.append(p4);
document.body.append(p5);


//Question # 7

var priceOfItem1 = 650 , priceOfItem2 = 100 , quantityItem1 = 3 , quantityItem2 = 7 , shippingCharges = 100;
var totalPrice = (priceOfItem1 * quantityItem1) + (priceOfItem2 * quantityItem2) + shippingCharges;

var p6= document.createElement("p");
document.body.innerHTML += (`<h1>Shopping Cart</h1>`);

p6.innerText=(`
                 Price of Item1 is ${priceOfItem1}\n
                Quantity of Item1 is ${quantityItem1}\n            
                Price of Item2 is ${priceOfItem2}\n 
                Quantity of Item2 is ${quantityItem2}\n   
                Shipping charges is ${shippingCharges}\n \n 
                Total cost of your order is ${totalPrice}
`);
document.body.append(p6);


// Question # 8

var totalMarks = 500;
var obtainedMarks = 400;

var p7= document.createElement("p");
document.body.innerHTML += (`<h1>Marks Sheet</h1>`);

p7.innerText = (`Total marks: ${totalMarks}\n
                 Obtained marks: ${obtainedMarks}\n
                 Percentage: ${obtainedMarks/totalMarks * 100}%`);

document.body.append(p7);               

//Question # 9

var usDollars =10;
var saudiRiyals =25;

var dollarsToPakRupee = usDollars * 104.80 ;
var riyalsToPakRupee = saudiRiyals * 28;

var total = dollarsToPakRupee + riyalsToPakRupee;

var p8 = document.createElement("p");
document.body.innerHTML += (`<h1>Currency in PKR</h1>`);

p8.innerText = (`Total currency in PKR: ${total}`);

document.body.append(p8); 

//Question # 10

var temp1 = 1;
temp1 = (temp1 + 5 ) * 10 / 2 ;
console.log(temp1);

//Question # 11

var currentYear = 2020;
var birthYear = 2000;

var p9 = document.createElement("p");
document.body.innerHTML += (`<h1>Age Calculator</h1>`);

p9.innerText = (`Birth Year : ${birthYear}
                 Current Year : ${currentYear}
                 Your Age: ${currentYear - birthYear}`);

document.body.append(p9); 


// Question # 12

var radius = 20;
var piValue = 3.142;
var circumference = 2 * piValue * radius;
var area = piValue * Math.pow(radius,2);


var p10 = document.createElement("p");
document.body.innerHTML += (`<h1>The Geometrizer</h1>`);

p10.innerText = (`Radius of circle : ${radius}
                 The circumference is: ${circumference}
                 The area is: ${area}`);

document.body.append(p10); 


// Question # 13

var fav_snack = "chips" , currentAge = 15 , maxAge = 65 , perDay = 3;

var p11 = document.createElement("p");
document.body.innerHTML += (`<h1>The Lifetime Supply Calculator</h1>`);
p11.innerText = (`Favourite Snack : ${fav_snack}
                  Current age : ${currentAge}
                  Estimated Maximum Age : ${maxAge}
                  Amount Of Snacks per day : ${perDay}
                  You will need ${(maxAge - currentAge) * perDay} to last you until the ripe old age of ${maxAge}`);

document.body.append(p11); 

// chapter-6-9

// Question # 1  // Question # 2

var body = (` 
<input type="text">
<input type="text">
<br>
<br>
<button>ADD</button>
<button>SUBTRACT</button>
<button>MULTIPLY</button>
<button>DIVIDE</button>

<p></p>`);

document.body.innerHTML = body;

var numbers = document.querySelectorAll("input");
var button = document.querySelectorAll('button');
var p = document.querySelector("p");
button[0].addEventListener('click',adding);
button[1].addEventListener('click',subtracting);
button[2].addEventListener('click',multiplying);
button[3].addEventListener('click',dividing);



function adding(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) + parseInt(num2);
    p.innerText=(`Sum of ${num1} and ${num2} is ${result}`);
}

function subtracting(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) - parseInt(num2);
    p.innerText=(`Subtraction of ${num1} and ${num2} is ${result}`);
}

function multiplying(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) * parseInt(num2);
    p.innerText=(`Multiplication of ${num1} and ${num2} is ${result}`);
}

function dividing(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) / parseInt(num2);
    p.innerText=(`Division of ${num1} and ${num2} is ${result}`);
}


// Question # 3

var temp;

var p1 = document.createElement("p");
p1.innerText=(`Value of variable after declaration is ${temp}`);
document.body.append(p1);

temp = 5;
p1.innerText = p1.innerText.concat(`\ninitial value is : ${temp}`);

temp++;
p1.innerText = p1.innerText.concat(`\nValue after increment is : ${temp}`);

temp = temp + 7;
p1.innerText = p1.innerText.concat(`\nValue after addition is : ${temp}`);

temp--;
p1.innerText = p1.innerText.concat(`\nValue after decrement is : ${temp}`);


temp = temp % 3;
p1.innerText = p1.innerText.concat(`\nThe remainder is : ${temp}`);


// Question # 4

var ticketPrice = 600;

var p2 = document.createElement("p");
p2.innerText=(`Total price to buy  5 tickets  for movie is ${ticketPrice* 5}PKR`);
document.body.append(p2);

//Question # 5

var p3 = document.createElement("p");

var table_num = 4;
for(var i=1; i<=10; i++)
{
    p3.innerText = p3.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
    document.body.append(p3);
}

//Question # 6


var temp_centigrade = 25;
var temp_fahrenheit = 70;

var celsius = (temp_fahrenheit - 32) * (5/9);
var fahrenheit = (temp_centigrade * 9/5 ) + 32;


var p4= document.createElement("p");
var p5= document.createElement("p");
p4.innerText=(`${temp_centigrade}C is ${fahrenheit}F`);
p5.innerText=(`${temp_fahrenheit}F is ${celsius}C`);
document.body.append(p4);
document.body.append(p5);


//Question # 7

var priceOfItem1 = 650 , priceOfItem2 = 100 , quantityItem1 = 3 , quantityItem2 = 7 , shippingCharges = 100;
var totalPrice = (priceOfItem1 * quantityItem1) + (priceOfItem2 * quantityItem2) + shippingCharges;

var p6= document.createElement("p");
document.body.innerHTML += (`<h1>Shopping Cart</h1>`);

p6.innerText=(`
                 Price of Item1 is ${priceOfItem1}\n
                Quantity of Item1 is ${quantityItem1}\n            
                Price of Item2 is ${priceOfItem2}\n 
                Quantity of Item2 is ${quantityItem2}\n   
                Shipping charges is ${shippingCharges}\n \n 
                Total cost of your order is ${totalPrice}
`);
document.body.append(p6);


// Question # 8

var totalMarks = 500;
var obtainedMarks = 400;

var p7= document.createElement("p");
document.body.innerHTML += (`<h1>Marks Sheet</h1>`);

p7.innerText = (`Total marks: ${totalMarks}\n
                 Obtained marks: ${obtainedMarks}\n
                 Percentage: ${obtainedMarks/totalMarks * 100}%`);

document.body.append(p7);               

//Question # 9

var usDollars =10;
var saudiRiyals =25;

var dollarsToPakRupee = usDollars * 104.80 ;
var riyalsToPakRupee = saudiRiyals * 28;

var total = dollarsToPakRupee + riyalsToPakRupee;

var p8 = document.createElement("p");
document.body.innerHTML += (`<h1>Currency in PKR</h1>`);

p8.innerText = (`Total currency in PKR: ${total}`);

document.body.append(p8); 

//Question # 10

var temp1 = 1;
temp1 = (temp1 + 5 ) * 10 / 2 ;
console.log(temp1);

//Question # 11

var currentYear = 2020;
var birthYear = 2000;

var p9 = document.createElement("p");
document.body.innerHTML += (`<h1>Age Calculator</h1>`);

p9.innerText = (`Birth Year : ${birthYear}
                 Current Year : ${currentYear}
                 Your Age: ${currentYear - birthYear}`);

document.body.append(p9); 


// Question # 12

var radius = 20;
var piValue = 3.142;
var circumference = 2 * piValue * radius;
var area = piValue * Math.pow(radius,2);


var p10 = document.createElement("p");
document.body.innerHTML += (`<h1>The Geometrizer</h1>`);

p10.innerText = (`Radius of circle : ${radius}
                 The circumference is: ${circumference}
                 The area is: ${area}`);

document.body.append(p10); 


// Question # 13

var fav_snack = "chips" , currentAge = 15 , maxAge = 65 , perDay = 3;

var p11 = document.createElement("p");
document.body.innerHTML += (`<h1>The Lifetime Supply Calculator</h1>`);
p11.innerText = (`Favourite Snack : ${fav_snack}
                  Current age : ${currentAge}
                  Estimated Maximum Age : ${maxAge}
                  Amount Of Snacks per day : ${perDay}
                  You will need ${(maxAge - currentAge) * perDay} to last you until the ripe old age of ${maxAge}`);

document.body.append(p11); 


// chapter 9-11

// Question # 1  // Question # 2

var body = (` 
<input type="text">
<input type="text">
<br>
<br>
<button>ADD</button>
<button>SUBTRACT</button>
<button>MULTIPLY</button>
<button>DIVIDE</button>

<p></p>`);

document.body.innerHTML = body;

var numbers = document.querySelectorAll("input");
var button = document.querySelectorAll('button');
var p = document.querySelector("p");
button[0].addEventListener('click',adding);
button[1].addEventListener('click',subtracting);
button[2].addEventListener('click',multiplying);
button[3].addEventListener('click',dividing);



function adding(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) + parseInt(num2);
    p.innerText=(`Sum of ${num1} and ${num2} is ${result}`);
}

function subtracting(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) - parseInt(num2);
    p.innerText=(`Subtraction of ${num1} and ${num2} is ${result}`);
}

function multiplying(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) * parseInt(num2);
    p.innerText=(`Multiplication of ${num1} and ${num2} is ${result}`);
}

function dividing(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) / parseInt(num2);
    p.innerText=(`Division of ${num1} and ${num2} is ${result}`);
}


// Question # 3

var temp;

var p1 = document.createElement("p");
p1.innerText=(`Value of variable after declaration is ${temp}`);
document.body.append(p1);

temp = 5;
p1.innerText = p1.innerText.concat(`\ninitial value is : ${temp}`);

temp++;
p1.innerText = p1.innerText.concat(`\nValue after increment is : ${temp}`);

temp = temp + 7;
p1.innerText = p1.innerText.concat(`\nValue after addition is : ${temp}`);

temp--;
p1.innerText = p1.innerText.concat(`\nValue after decrement is : ${temp}`);


temp = temp % 3;
p1.innerText = p1.innerText.concat(`\nThe remainder is : ${temp}`);


// Question # 4

var ticketPrice = 600;

var p2 = document.createElement("p");
p2.innerText=(`Total price to buy  5 tickets  for movie is ${ticketPrice* 5}PKR`);
document.body.append(p2);

//Question # 5

var p3 = document.createElement("p");

var table_num = 4;
for(var i=1; i<=10; i++)
{
    p3.innerText = p3.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
    document.body.append(p3);
}

//Question # 6


var temp_centigrade = 25;
var temp_fahrenheit = 70;

var celsius = (temp_fahrenheit - 32) * (5/9);
var fahrenheit = (temp_centigrade * 9/5 ) + 32;


var p4= document.createElement("p");
var p5= document.createElement("p");
p4.innerText=(`${temp_centigrade}C is ${fahrenheit}F`);
p5.innerText=(`${temp_fahrenheit}F is ${celsius}C`);
document.body.append(p4);
document.body.append(p5);


//Question # 7

var priceOfItem1 = 650 , priceOfItem2 = 100 , quantityItem1 = 3 , quantityItem2 = 7 , shippingCharges = 100;
var totalPrice = (priceOfItem1 * quantityItem1) + (priceOfItem2 * quantityItem2) + shippingCharges;

var p6= document.createElement("p");
document.body.innerHTML += (`<h1>Shopping Cart</h1>`);

p6.innerText=(`
                 Price of Item1 is ${priceOfItem1}\n
                Quantity of Item1 is ${quantityItem1}\n            
                Price of Item2 is ${priceOfItem2}\n 
                Quantity of Item2 is ${quantityItem2}\n   
                Shipping charges is ${shippingCharges}\n \n 
                Total cost of your order is ${totalPrice}
`);
document.body.append(p6);


// Question # 8

var totalMarks = 500;
var obtainedMarks = 400;

var p7= document.createElement("p");
document.body.innerHTML += (`<h1>Marks Sheet</h1>`);

p7.innerText = (`Total marks: ${totalMarks}\n
                 Obtained marks: ${obtainedMarks}\n
                 Percentage: ${obtainedMarks/totalMarks * 100}%`);

document.body.append(p7);               

//Question # 9

var usDollars =10;
var saudiRiyals =25;

var dollarsToPakRupee = usDollars * 104.80 ;
var riyalsToPakRupee = saudiRiyals * 28;

var total = dollarsToPakRupee + riyalsToPakRupee;

var p8 = document.createElement("p");
document.body.innerHTML += (`<h1>Currency in PKR</h1>`);

p8.innerText = (`Total currency in PKR: ${total}`);

document.body.append(p8); 

//Question # 10

var temp1 = 1;
temp1 = (temp1 + 5 ) * 10 / 2 ;
console.log(temp1);

//Question # 11

var currentYear = 2020;
var birthYear = 2000;

var p9 = document.createElement("p");
document.body.innerHTML += (`<h1>Age Calculator</h1>`);

p9.innerText = (`Birth Year : ${birthYear}
                 Current Year : ${currentYear}
                 Your Age: ${currentYear - birthYear}`);

document.body.append(p9); 


// Question # 12

var radius = 20;
var piValue = 3.142;
var circumference = 2 * piValue * radius;
var area = piValue * Math.pow(radius,2);


var p10 = document.createElement("p");
document.body.innerHTML += (`<h1>The Geometrizer</h1>`);

p10.innerText = (`Radius of circle : ${radius}
                 The circumference is: ${circumference}
                 The area is: ${area}`);

document.body.append(p10); 


// Question # 13

var fav_snack = "chips" , currentAge = 15 , maxAge = 65 , perDay = 3;

var p11 = document.createElement("p");
document.body.innerHTML += (`<h1>The Lifetime Supply Calculator</h1>`);
p11.innerText = (`Favourite Snack : ${fav_snack}
                  Current age : ${currentAge}
                  Estimated Maximum Age : ${maxAge}
                  Amount Of Snacks per day : ${perDay}
                  You will need ${(maxAge - currentAge) * perDay} to last you until the ripe old age of ${maxAge}`);

document.body.append(p11); 


// chapter -12-13



// Question # 1



var character = prompt("enter any character ");

if(character.charCodeAt(0) >=65 && character.charCodeAt(0) <=90)
{
    var  body = ("It is uppercase letter");
    document.body.innerHTML = body;

}

else if(character.charCodeAt(0) >=97 && character.charCodeAt(0) <=122)
{
    var  body = ("It is lowercase letter");
    document.body.innerHTML = body;

}

else if(character.charCodeAt(0) >=47 && character.charCodeAt(0) <=57)
{
    var  body = ("It is number");
    document.body.innerHTML = body;
}




// Question # 2


var num1 = prompt('enter first number');
var num2 = prompt('enter second number');


if(+num1 > +num2)
{
    var  body = (`<p>${num1} is larger</p>`);
    document.body.innerHTML = body;

}

else if(+num1 < +num2)
{
    var  body = (`<p>${num2} is larger</p>`);
    document.body.innerHTML = body;

}

else if( num1 == num2)
{
    var  body = ("both are equal");
    document.body.innerHTML = body;
}



// Question # 3


var num = prompt('enter number');

if(+num > 0)
{
    var  body = (`<p>${num} is positive</p>`);
    document.body.innerHTML = body;

}

else if(+num < 0)
{
    var  body = (`<p>${num} is negative</p>`);
    document.body.innerHTML = body;

}

else if( num1 == 0)
{
    var  body = ("number is zero");
    document.body.innerHTML = body;
}



// Question # 4


var character = prompt('enter a character');

if( +character.charCodeAt(0) === 65 || +character.charCodeAt(0) === 69|| +character.charCodeAt(0) === 73 || +character.charCodeAt(0) === 79 || +character.charCodeAt(0) === 85 || +character.charCodeAt(0) === 97 || +character.charCodeAt(0) === 101 || +character.charCodeAt(0) === 105 ||+character.charCodeAt(0) === 111 || +character.charCodeAt(0) === 117  )
{
    var  body = ("character is vowel");
    document.body.innerHTML = body;
}
else{
    var  body = ("character is not  vowel");
    document.body.innerHTML = body;
}


//Question # 5



var correctPassword = "sara";
var enterPassword = prompt('enter password');

if(enterPassword == "")
{
    var  body = ("Please enter your pasword");
    document.body.innerHTML = body;
}
else if(enterPassword == correctPassword)
{
  var body = ("Correct! The password you entered matches the original password");
  document.body.innerHTML = body;
}
else 
{
    var body = ("Incorrect password");
    document.body.innerHTML = body;
}




//Question # 6

var greeting;
var hour = 13;
if (hour < 18)
{ greeting = "Good day";}
else
 {greeting = "Good evening"; } 

 // Question # 7

 var time_temp = 1900;
 var time = prompt('enter time');

 if(time >=2100 && time <=2359)
 {
     var  body = ("Good Night");
     document.body.innerHTML = body;
 }
 else if(time >=1700 && time < 2100)
 {
   var body = ("Good Evening");
   document.body.innerHTML = body;
 }
 else if(time >=1200 && time < 1700)
 {
     var body = ("Good afternoon");
     document.body.innerHTML = body;
 }

 else if(time >=0000 && time < 1200)
 {
     var body = ("Good Morning");
     document.body.innerHTML = body;
 }

 // chapter -14-16

 //Question # 1

var studentNames = [];
var strArray = ['a','b','c'];
var boolArray = [true , false];
var numArray = [1,2,3,4];
var mixArray = ['a',1,true];
var qualifications = ["SSC" , "HSC", "BCS", "BS"," BCOM"," MS"," M. Phil."," PhD"];

var body = (`<h1>Qualifications</h1>
              <ul></ul>`)

document.body.innerHTML = body;    

var list = document.querySelector('ul');

for(const q of qualifications) 
{

  list.innerHTML += (`<li>${q}</li>`)

}



//Question # 8



var studentNames = ['sara','rafiq','haleema'];
var totalMarks = [400,450,500]
var studentPercentage = [90,95,100];

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for( let i=0; i <= 2; i++) 
{

  p.innerText += (`Score of ${studentNames[i]} is ${totalMarks[i]}.Percentage is ${studentPercentage[i]}%\n`)

}



// Question # 9

var colors = ['red','blue'];

var body = (`<ul></ul>`);
document.body.innerHTML = body;
var colorList = document.querySelector('ul');

for(const c of colors) 
{
   
    colorList.innerHTML += (`<li>${c}</li>`)

}


var enterColor1 = prompt('enter color to add in beginning');
colors.unshift(enterColor1);

/*
for(const c of colors) 
{
    
    colorList.innerHTML += (`<li>${c}</li>`)

}
*/
var enterColor2 = prompt('enter color to add in ending');
colors.push(enterColor2);

/*
for(const c of colors) 
{
    
  colorList.innerHTML += (`<li>${c}</li>`)

} */

colors.unshift('purple',"green");

/*
for(const c of colors) 
{
  colorList.innerHTML += (`<li>${c}</li>`)

} */

colors.shift();

var que1 = prompt('what color , you want to add ?');
var que2 = parseInt(prompt('and in what index'));

colors.splice(que2,0,que1);

var que3 = parseInt(prompt('At what index , you want to delete color'));
var que4 = parseInt(prompt('and how many colors?'));

colors.splice(que3, que4);

/*
for(const c of colors) 
{
  colorList.innerHTML += (`<li>${c}</li>`)

} */


// Question # 10


var studentScore = [100,99,56];


  

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

p.innerText = (`scores of student: ${studentScore[0]},${studentScore[1]},${studentScore[2]}\n`);

studentScore.sort(function(a, b) {
                    return a - b;
                  });
p.innerText += (` sorted scores of student: ${studentScore[0]},${studentScore[1]},${studentScore[2]}\n`);               


// Question # 11


var cityNames = ['karachi','lahore','islamabad','peshawar','quetta'];
var selectedAreas = cityNames.slice(2,4);

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

p.innerText = (`cities: ${cityNames[0]} ${cityNames[1]} ${cityNames[2]} ${cityNames[3]} ${cityNames[4]}\n
                selected cities: ${selectedAreas[0]} ${selectedAreas[1]} `);



// question # 12


var arr = ["This", "is", "my", "cat"]; 
var str = arr.join(' ');


var body = (`<p></p>`)
document.body.innerHTML = body;   

var p = document.querySelector('p');
p.innerText= (`Array :
            ${arr[0]} , ${arr[1]} , ${arr[2]} , ${arr[3]}
             String is :
             ${str}`);


// Question # 13

var devices = ['keyboard','mouse','CPU','PC'];

var body = (`<h1>Devices</h1>
              ${devices[0]} , ${devices[1]} , ${devices[2]} , ${devices[3]}
              <ul></ul>`)

document.body.innerHTML = body;    

var list = document.querySelector('ul');

for(let i=0 ; i<=3 ; i++) 
{
  
  list.innerHTML += (`<li>out:
                      ${devices.shift()}</li>`)

}

// Question # 14

var devices = ['keyboard','mouse','CPU','PC'];

var body = (`<h1>Devices</h1>
              ${devices[0]} , ${devices[1]} , ${devices[2]} , ${devices[3]}
              <ul></ul>`)

document.body.innerHTML = body;    

var list = document.querySelector('ul');

for(let i=0 ; i<=3 ; i++) 
{
  
  list.innerHTML += (`<li>out:
                      ${devices.pop()}</li>`)

}

// chapter-17-20

// question # 1

var multidimension = [[]];

// question # 2

multidimension = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=0; i<=2 ; i++)
{
    for(let j=0; j<=3 ; j++)
    {
        p.innerText +=(`${multidimension[i][j]}`);
    }
    p.innerText +=(`\n`);
}

// question # 3

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=1; i<=10 ; i++)
{
      p.innerText +=(`${i}\n`);
}

// question # 4


var body = (` 
<p>Enter number to show its table</p>
<input type="text"> 
<p>Enter table length</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML += body;

var p2 = document.createElement("p");

var text = document.querySelectorAll('input');
var button = document.querySelector('button');
button.addEventListener('click',table);

function table(event)
{
    p2.innerText = "";
    var table_num =text[0].value;
    for(var i=1; i<= +text[1].value; i++)
    {
        p2.innerText = p2.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
        document.body.append(p2);
    }
}


// question # 5

fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=0; i<=4 ; i++)
{
      p.innerText +=(`Element at index ${i} is ${fruits[i]}\n`);
}


// question # 6

var body = (`<p>Counting:\n</p>`);

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=1; i<=15 ; i++)
{
      p.innerText +=(`${i}\n`);
}


document.body.innerHTML += (`<p>Reverse counting: \n</p>`);
var p1 = document.querySelectorAll('p');

for(let i=10; i >= 1 ; i--)
{
     p1[1].innerText +=(`${i}\n`);
 }
                             
 document.body.innerHTML += (`<p>even no: \n</p>`);
 var p2 = document.querySelectorAll('p');
 for(let i=0; i <= 20 ; i++)
 {
     if( i %2 == 0)
     {
        p2[2].innerText +=(`${i}\n`);
     }
      
  }

document.body.innerHTML += (`<p>odd no: \n</p>`);
 var p3 = document.querySelectorAll('p');
 for(let i=0; i <= 20 ; i++)
 {
     if( i %2 != 0)
     {
        p3[3].innerText +=(`${i}\n`);
     }
      
  }

  document.body.innerHTML += (`<p>series: \n</p>`);
  var p4 = document.querySelectorAll('p');
  for(let i=1; i <= 20 ; i++)
  {
      if( i %2 == 0)
      {
         p4[4].innerText +=(`${i}k\n`);
      }
       
   }


// question # 7
   A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
   var body = (`<p></p>`);
  var temp = 0;

   document.body.innerHTML = body;    

   var p = document.querySelector('p');

   var item = prompt("enter any item for search");

   for(const a of A) {
    if (a === item) {
        p.innerText = (`${item} is available at index ${A.indexOf(item)} in our bakery`);
        temp++;
        break;
    }
   
    
  }

  if(temp != 1)
  {
      p.innerText = (`${item} is not  available  in our bakery`);
  }
 

  // question # 8 ,9

 
var A = [24, 53, 78, 91, 12];



var sorted = A.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0];
var largest  = sorted[sorted.length - 1];

var body = (`<p></p>`);
document.body.innerHTML = body; 
var p = document.querySelector('p');

p.innerText += (` smallest number is ${smallest} , largest number is ${largest}`);




// question # 10

var body = (`<p>Multiple of five:</p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=1; i<=100 ; i++)
{   
    if(i % 5 ===0)
    {
        p.innerText +=(`${i}\n`);
    }
     
}





















 

























































































