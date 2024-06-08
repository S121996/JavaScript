/*
 13- 1101  
 19- 10011
 6- 110                  
                   32 16 8 4 2 1
 /*                  
&(and)   |(or)   ^(xor)   !(not)
xor 
0      0     0
1      1     0
1      0     1
0      1     1

var a=7      //    1 1 1
var b=5     //     1 0  1
// var c=a&b //        1  0 1
// var c=a|b //           1 1 1     
var c=a^b //         0  1  0  
console.log(c);
*/ 
/*
if statement 
if(condition){
    statement 
}

if(false){
    console.log("execure");
}

var a=10;var b=50
if(a<b){
    console.log(a);
}

// if statement with logical operator 
var a=20;var b=5; var c=8
if(a>b && a>c){
    console.log(a);
}
if(b>c && b>a){
    console.log(b);
}
if(c>a && c>b){
    console.log(c);
}

if else statement 
if(condition){
    statement 1
}
else{
    statement 2
}

if(false){console.log("hello");}
else{console.log("ducat");}

var n=50
if(n%2==0){
    console.log("even no");
}
else{
    console.log("odd no");
}

var id="rahul123"
var pass=12345
if(id=='rahul12345' && pass==12345){
    console.log("user login");
}
else{
    console.log("not login");
}

var a=10;var b=2;var c=4
if(a>b)
     if(a>c)
     {
        console.log(a);
     }
     else{
        console.log(c);
     }

else
   if(b>c){
    console.log(b);
   }
   else{
    console.log(c);
   }

if else if statement 
if(condition 1){
    statement 1
}
else if(con 2){
    statement2
}
. .  . . . 
..  . . . . 
else{
    false statement 
}
*/
var marks=90
if(marks>=75){
    console.log("honours");
}
else if(marks>=60){
    console.log("first");
}
else if(marks>=50){

    console.log("second");
}
else if(marks>=30){

    console.log("third");
}
else{
    console.log("fail");
}