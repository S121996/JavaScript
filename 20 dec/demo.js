/*
switch statement 
switch(expression){
    case 1:
        statement 1 
        break; 
    . .  . . . 
    . .  . . 
    . . . .
    default:
        false statement
}

var ch='a'
switch(ch){
    case 'a':
        console.log("vowel");
        break 
        case 'e':
            console.log("vowel");
            break 
            case 'i':
                console.log("vowel");
                break 
                case 'o':
                    console.log("vowel");
                    break 
                    case 'u':
                        console.log("vowel");
                        break 
        default:
            console.log("not vowel");
}

var n=70
switch(n%2){
    case 0:
        console.log("Even no");
        break;
        case 1:
            console.log("odd no");
            break 
        default:
            console.log("NAN");
}

loop 
1-while loop 
2-do-while loop 
3- for loop 
4- foreach loop 
5- for of loop 
6- for in loop 
 
while loop 

ini 
while(condition){
    statement 
    update 
}
var i=1
while(i<=10){
    console.log("hello-",i);
    i++
}

var j=100
while(j>=90){
    console.log(j);
    j--
}

var j=100
while(j>=1){
    console.log(j);
    j-=10
}

var i=1
while(i<=10){
  if(i%2==0){
    console.log(i,"-even no");
  }
  else{
    console.log(i,"-odd no");
  }
    i++
}



var i=1
var sum=0
while(i<=10){
    sum+=i 
    console.log(i);
    i++
}
console.log("total="+sum);*/
var i=1
var t=2
while(i<=10){
    console.log(t,"*",i,"=",i*t);
    i++
}