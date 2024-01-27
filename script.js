// // setInterval(() => {
// //     console.log("Hello");
// // }, 3000);

// // setInterval(() => {
// //     console.log("hai");
// // }, 4000);

// // setTimeout(() => {
// //     console.log("hai");
    
// // },1000 );

// // setTimeout(() => {
// //     console.log("hello");
  
// // }, 2000);

// // setTimeout(() => {
// //     console.log("hai");
// // }, 3000);

// // call

// // var btn =document.getElementById("btn")
// // btn.addEventListener("click",()=>{
// //     alert("Button clicked")
// // })

// // function add(a,b) {
    
// // }

// // async and sync 

// // setInterval(() => {
// //     console.log("hello");
// // },3000);

// // setTimeout(() => {
// //    console.log("hai"); 
// // },4000 );

// // function add1(a,b){
// //     var sum = a+b
// //     return sum
// // }


// // function display(val){
// //     console.log(val);
// //     document.getElementById("textc").innerText=`The sum is = ${val}`
// // }
// // var result = add1(9,15)
// // display(result)

// // callback function
// // function add1(a,b,callback){
// //     var sum = a+b
// //     callback(sum)

// // }
// // function display(val){
// //     document.getElementById("textc").innerText=`The sum is =${val}`
// // }

// // add1(10,45,display)


// // function add1(a,b){
// //     let promise = new Promise((resolve,reject)=>{
// //         var sum = a+b
// //         if(sum>10){
// //             resolve(sum)
// //         }
// //         else{
// //             reject("sum is not greater than 10")
// //         }
// //     })
// //     // console.log(promise)
// //    promise.then ((val)=>{
// //      document.getElementById("textc").innerText=`The sum is ${val}`
// //    })
// //    .catch((err)=>{
// //     document.getElementById("textc").innerText= `The error message is ${err}`
// //    })
// // }

// // add1(2,6)

// // function add1(a,b){
// //     let promise = new Promise((resolve,reject)=>{
// //         var sum = a+b
// //         if(sum>10){
// //             resolve(sum)
// //         }
// //         else{
// //             reject("sum is not greater than 10")
// //         }
// //     })
// //     // console.log(promise)
// //    promise.then ((val)=>{
// //      document.getElementById("textc").innerText=`The sum is ${val}`
// //    })
// //    .catch((err)=>{
// //     document.getElementById("textc").innerText= `The error message is ${err}`
// //    })
// // }

// // function add1(a,b){
// //     let promise = new Promise((resolve,reject)=>{
// //         var sum = a+b
// //         if(sum>10){
// //             resolve(sum)
// //         }
// //         else{
// //             reject("sum is not greater than 10")
// //         }
// //     })
// //     // console.log(promise)
// //    promise.then ((val)=>{
// //      document.getElementById("textc").innerText=`The sum is ${val}`
// //    })
// //    .catch((err)=>{
// //     document.getElementById("textc").innerText= `The error message is ${err}`
// //    })
// // }

// // add1(2,6)



// // function add1(a,b){
// //     let promise = new Promise((resolve,reject)=>{
// //         var sum = a+b
// //         if(sum>10){
// //             resolve(sum)
// //         }
// //         else{
// //             reject("sum is not greater than 10")
// //         }
// //     })
// // }

// // add1(2,3)
// // promise.then((val)=>{
// //     document.getElementById("textc").innetText=`The sum is ${val}`
// // })

// // .catch((err)=>{
// //     document.getElementById("textc").innerText= `The error message is ${err}`
// //    })

// // function add2(a,b){
// //     let promise = new Promise((resolve,reject)=>{
// //         var sub = a-b
// //         if(sub>10){
// //             resolve(sub)
// //         }
// //         else{
// //             reject("sub is not less than 10")
// //         }
// //     })

// // promise.then((val)=>{
// //     document.getElementById("textc1").innetText=`The sub is ${val}`
// // })

// // .catch((err)=>{
// //     document.getElementById("textc1").innerText= `The error message is ${err}`
// //    })}

// // add2(50,15)

// async function add1(a,b){
//     let promise = new Promise ((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans =await promise
//     document.getElementById("textc").innerHTML= `The sum is ${ans}`
// }

// add1(10,2)

// async function add2(a,b){
//     let promise1 = new Promise((resolve,reject)=>{
//         var sub = a-b
//         if(sub>15){
//             resolve(sub)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise1
//     document.getElementById("sub").innerHTML = `The sum is ${ans}`
// }

// add2(50,2)

// async function add3(a,b){
//     let promise2 = new Promise((resolve,reject)=>{
//         var mult = a*b
//         if(mult>15){
//             resolve(mult)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise2
//     document.getElementById("mult").innerHTML = `The sum is ${ans}`
// }

// add3(50,15)


// async function add4(a,b){
//     let promise3 = new Promise((resolve,reject)=>{
//         var div = a/b
//         if(div>15){
//             resolve(div)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise3
//     document.getElementById("div").innerHTML = `The sum is ${ans}`
// }

// add4(100,2)

// function ajaxcall(){
//     var xhttp = new XMLHttpRequest()
//     xhttp.open('GET','https://dummyjson.com/products',true)
//     xhttp.send()
//     xhttp.onreadystatechange = function () {
//         let promise = new Promise ((resolve,reject)=>{
//             if(this.readystate==4 && this.status==200){
//                 resolve("It is done")
//             }
//         })
//         promise.then((val)=>{
//             document.getElementById("textc").innerHTML=`The result is ${val}`
//         })
//     }
// }
// ajaxcall()


