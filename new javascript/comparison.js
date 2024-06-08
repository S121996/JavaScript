// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" >1);
// console.log("02" >1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined==0);

//=== (strict check)
//its check value as well as datatype
 console.log("2"==2);
 console.log("2"===2);

 const students = ['Sumit','Rahul','Rohit']
 console.log(students[0]);
//  for(let i=0; i<students.length; i++){
//      console.log(students[i])
//   }

//   for(let i of students){
//     console.log(i)
//   }

  students.forEach((item,index,arr)=>(
    console.log(index, item) 
  ))
  
//   console.log('number1')
// setTimeout(()=>{
//    console.log('Number2')
// },2000)
// console.log('number3')

//setInterval
// const intervalId = setInterval(greet, 1000);
// setTimeout(()=>{
//   clearInterval(intervalId);
// },5000)


num = [1, 2, 3, 4];
const sum = num.reduce((result,item)=>{
   result + item
})
console.log(sum)

