// // // // // // Hoisting
// // // // //     //variable declaration
// // // // //         //var
// // // // //         console.log(a);
// // // // //         var a = 10
// // // // //         //start with letter
// // // // //         // dont use space and -
// // // // //         //meaning full names
// // // // //         // dont use js names for varible dec
// // // // //         var a =20
        
        
// // // // //         // let
// // // // //         // console.log(b);
// // // // //         let b;
// // // // //     console.log(b);
        
        
// // // // //         //const
// // // // //         const c =60;
// // // // //         // c=80
// // // // //         console.log(c);
// // // // // block scope or local scope
// // // // // {
// // // // //     var v = 60
// // // // //     // console.log(v);
    
// // // // // }
// // // // // console.log(v);
// // // // // {
// // // // //     let v = 60
// // // // //     // console.log(v);
    
// // // // // }
// // // // // console.log(v);

// // // // //function scope or Global scope
// // // // // function add(){
// // // // //     let b=20
// // // // // //     {
// // // // // //         console.log(b);
        
// // // // // //     }
// // // // // // }
// // // // // // add()

// // // // // //data types
// // // // //     // premitive data types
// // // // //         // number
// // // // //             var num = 50.60
// // // // //             console.log(typeof(num));
            
// // // // //         // string
// // // // //             let name = "xyz"
// // // // //             console.log(typeof(name));
            
// // // // //         // boolean
// // // // //         isAlive = true
// // // // //         console.log(typeof(isAlive));
        
// // // // //         // undefined
// // // // //         let c
// // // // //         console.log(typeof(c));
        
// // // // //         // Null
// // // // //         let d=null
// // // // //         console.log(typeof(d));
        
// // // // //         // Nan - Not an Number
    
// // // // //         // non premitive
// // // // //             //array - index of array
// // // // //             let arr = [10,"abc",true,undefined]
// // // // //             console.log(typeof(arr));
// // // // //             console.log(arr);
// // // // //             console.log(arr[0]);
// // // // //             console.log(arr[1]);
// // // // // //             console.log(arr[2]);
// // // // // //             console.log(arr[3]);

// // // // // //             console.log(arr.length);
            
            
// // // // // //             // object - Key of Object
// // // // // //             person = {
// // // // // //                 name:"abc",
// // // // // //                 age:20,
// // // // // //                 family:{
// // // // // //                     father:"def",
// // // // // //                     mother:"hjgj",
// // // // // //                     siblings:{
// // // // // //                         brother:"trfv",
// // // // // //                         sister:"hghfhg"
// // // // // //                     }
// // // // // //                 }
// // // // // //             }
// // // // // //             console.log(person);
// // // // // //             console.log(person.name);
// // // // // //             console.log(person.family.siblings);
// // // // // //operators
// // // // //     //arithmetic   +,-,*,/,%,++,--
// // // // //     let b= 21
// // // // //     let a= 40
// // // // //     console.log(a+b);
// // // // //     console.log(a-b);
// // // // //     console.log(a*b);
// // // // //     console.log(a/b);
// // // // //     console.log(a%b);
// // // // //     // a=a+1
// // // // //     console.log(++a); 
// // // // //     // a=41
// // // // //     console.log(a++);
// // // // //     // o a = 41
// // // // //     // a=42
// // // // //     console.log(a);
     
// // // // //     console.log(--b);
// // // // //     console.log(b--);
// // // // //     // comparison
// // // // //             // ==,===,!= ,<,>,<=,>=
           
// // // // //             console.log(a==b);
// // // // //             console.log(a>b);
// // // // //             console.log(a<b);
// // // // //             console.log(a<=b);
// // // // //             console.log(a>=b);
// // // // //             console.log(a!=b);
// // // // //             let num1 = 10
// // // // //             let num2 = "10"
// // // // //             console.log(num1==num2);
// // // // //             console.log(num1===num2);
            

            

// // // // //     // logical
// // // // //             // And && OR || 
// // // // //         let age = 18
// // // // //         let location1 = "TNE"
// // // // //        let nationality="Uk"
// // // // //         console.log(age>18 && location1=="TN" && nationality=="IN" );
// // // // //         console.log(age>18 || location1=="TN" || nationality=="IN" );
        
// // // // //     // assigment operator
// // // // //         // =,+=,*=,-=,/=
// // // // //         // a=a+b
        
        
// // // // //         a+=b
// // // // //         console.log(a);
// // // // //         e=5
// // // // //         f=10
// // // // //         e*=f
// // // // //         console.log(e);
        
// // // // //     // ternary
// // // // //     console.log(age>=18?"Adult":"Teenager");
    
// // // // // // function
// // // // //     function addtion(num1,num2){
// // // // //         return num1+num2        
// // // // //     }
// // // // //     console.log(addtion(50,44));
// // // // //     // console.log(94);
    
    
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)
// // // // //     // addtion(50,44)

// // // // //     // types
// // // // //         //arrow
// // // // //             const arrow = (c,d)=> {return num1*num2}
// // // // //             console.log(arrow(28,88));
            

// // // // //             const add = (a,b)=>{
// // // // //                 return a+b
// // // // //             }
// // // // //             console.log(add(10,50));
            
// // // // //         //IIFI
// // // // //         const IIFI = (function(g){
// // // // //             console.log(g);
            
// // // // //         })
// // // // //         IIFI(100)
// // // // //         // ananoums
// // // // //         const ana = function(){
            
// // // // //         }

// // // // // // Conditional Statements
// // // // //         // if
// // // // //         let age =19
// // // // //         natinality = "IN"
// // // // //         locality = "TN"
// // // // //         // if(age>=18 &&locality=="TN" ){
// // // // //         //     console.log("He is Eligible to vote")            
// // // // //         // }
// // // // //         // ifelse
// // // // //         if(age>=18 && locality=="TN"){
// // // // //             console.log("He is Eligible to vote");
            
// // // // //         }else{
// // // // //             console.log("Not Eligilble");
            
// // // // //         }

// // // // //         let mark =81
// // // // //         if(mark>90){
// // // // //             console.log("Grade A");            
// // // // //         }
// // // // //         else if(mark>80){
// // // // //             console.log("Grade B");            
// // // // //         }
// // // // //         else if(mark>70){
// // // // //             console.log("Grade C");
            
// // // // //         }
// // // // //         else{
// // // // //             console.log("Pass");            
// // // // //         }
// // // // //         if(age>=18){
// // // // //             if(natinality=="IN"){
// // // // //                 if(location=="TN"){
// // // // //                     console.log("Eligible to vote");                    
// // // // //                 }else{
// // // // //                     console.log("He is Not Eligible because he not from TN");                    
// // // // //                 }
// // // // //             }else{
// // // // //                 console.log("He is Not Indian");                
// // // // //             }
// // // // //         }
// // // // //         else{
// // // // //             console.log("Not Eligible");            
// // // // //         }
// // // // // // switch
// // // // // userEmail = "abc@gmail.com"
// // // // // switch(userEmail){
// // // // //     case "abc@gmail.com":
// // // // //         console.log("He is abc In our Db");  
// // // // //         break
// // // // //     case "abe@gmail.com":
// // // // //         console.log("He is abe In our Db"); 
// // // // //         break
// // // // //     case "def@gmail.com":
// // // // //         console.log("He is def In our Db"); 
// // // // //         break
// // // // //     case "xyz@gmail.com":
// // // // //         console.log("He is xyz In our Db");
// // // // //         break
// // // // //     default:
// // // // //         console.log("He is new to our Db");
          
// // // // // }
// // // // // // looping Statements
// // // // //     // while
// // // // //         let a=10
// // // // //         while(a<=15){
// // // // //             console.log("While is working");
// // // // //             a++
// // // // //         }
// // // //         let marks = [80,90,70,88,66]
       
// // // //     //     let c = 0
// // // //     //     while(c<marks.length){
// // // //     //         console.log(marks[c]);
// // // //     //         // c=0 marks[0] = 80
// // // //     //         // c=1 marks[1] = 90
// // // //     //         // c=2 marks[2] = 70
// // // //     //         // c=3 marks[3] = 88
// // // //     //         // c=4 marks[4] = 66
// // // //     //         c++
            
// // // //     //     }
// // // //     // //do while
// // // //     // do{
// // // //     //     console.log("Do while is working");
        
// // // //     // }while(c<marks.length)
// // // //     // // for
// // // //     // let total = 0
// // // //     //     for(let x =0;x<marks.length;x++){
// // // //     //         total+=marks[x]
// // // //     //         // total = 0+80 = 80
// // // //     //         // total = 80+90 = 170
// // // //     //         // total = 170+70 = 240
// // // //     //         // total = 240+88 = 328
// // // //     //         // total = 328+66 = 394
// // // //     //         console.log(marks[x]);            
// // // //     //     }
// // // //     //     console.log(total);
        
// // // //     //     // for of
// // // //     //         for(let x of marks){
// // // //     //             console.log(x);                
// // // //     //         }
// // // //     //     // for in
// // // //     //     for(let x in marks){
// // // //     //             console.log(marks[x]);                
// // // //     //         }
// // // //         // foreach
// // // //         marks.forEach((item)=>console.log(item))
// // // //         let names = "Anandh"
// // // //         // output
// // // //         // A
// // // //         // An
// // // //         // Ana
// // // //         // Anan
// // // // //         // Anand
// // // // //         // Anandh

// // // // //         // h
// // // // //         // hd
// // // // //         // hdn
// // // // //         // hdna
// // // // //         //hdnan
// // // // //         // hdnana

// // // // // let name = "xyz"
// // // // // let reverse="";
// // // // // for(let i =name.length-1;i>=0;i--){
// // // // //     reverse+=name[i]
// // // // // }
// // // // // console.log(name===reverse?"Palindrome":"Not Palindrome");

// // // // // Array methods
// // // //  let marks = [80,90,70,88,61]
// // // // // MRF
// // // // // Map
// // // //     marks.map((item)=>{
// // // //         console.log(item);
// // // //     })
// // // // // Reduce
// // // //     total = marks.reduce((a,b)=>a+b)
// // // //     // a=80
// // // //     // b=0 =  a+b = 80
// // // //     // b=80
// // // //     // a = 90 90+80 = 170
// // // //     console.log(total);
    
// // // // // filter
// // // // text_arr = ["cherry","kIWI","banana"]
// // // //     odd = marks.filter((item)=>item%2!=0)
// // // //     console.log(odd);
    
// // // // remove_banana = text_arr.filter((x)=>x!="banana")
// // // // console.log(remove_banana);

// // // // text_arr.push("Kiwi")
// // // // console.log(text_arr);
// // // // // pop
// // // // text_arr.pop()
// // // // console.log(text_arr);
// // // // // unshift
// // // // text_arr.unshift("grapes")
// // // // console.log(text_arr);

// // // // // shift
// // // // text_arr.shift()
// // // // console.log(text_arr);

// // // // // find
// // // // let mark = [40,90,7,50,61]
// // // // let res = mark.find(x=>x>62)
// // // // console.log(res);

// // // // // includes
// // // // console.log(mark.includes(91));
// // // // console.log(mark.indexOf(61));

// // // // // slice
// // // // totals = [499,490,489,488,480]
// // // // let topers = totals.slice(0,3)
// // // // console.log(topers);

// // // // // splice
// // // // // mark.splice(1,3,"nEWuSER")
// // // // // console.log(mark);

// // // // // SORT
// // // // let fruits = ["cherry","kiwi","banana","orange"]

// // // // fruits.sort()
// // // // console.log(fruits);

// // // // // mark.sort()
// // // // mark.sort((a,b)=>a-b)
// // // // console.log(mark);

// // // // // reverse
// // // // // let name = "xyz"
// // // // // reverse = name.reverse()
// // // // // console.log(reverse);

// // // // let arr1 = [1,2,3,4,5,6]
// // // // // rev = arr1.reverse()
// // // // // console.log(rev);

// // // // let eve = arr1.filter((n)=>n%2===0).map((item)=>item*2)
// // // // console.log(eve);    




// // // // setTimeout
// // //     setTimeout(()=>{
// // //         console.log("SetTimeout is working");
        
// // //     },5000)
// // // // setInterval
// // //  setInterval(()=>{
// // //         console.log("setInterval is working");
        
// // //     },10000)

// // // // async Methods    
// // //     // promise
// // //         const bookTicket = new Promise((resolved,reject)=>{
// // //             let success = false
// // //             if(success){
// // //                 resolved("Ticket booked Successfully")
// // //             }
// // //             else{
// // //                 reject("Unable to book the ticket")
// // //             }
// // //         })
// // //         bookTicket.then((result)=>{
// // //             console.log(result);
            
// // //         }).catch((err)=>{
// // //             console.log(err);
            
// // //         })

// // //         let Friend1 = new Promise((resolved,reject)=>{
// // //             let reached = true
// // //             if(reached){
// // //                 resolved("Friend1 is Reached Home")
// // //             }
// // //             else{
// // //                 reject("Friend1 Not yet Reached")
// // //             }
// // //         })
// // //         let Friend2 = new Promise((resolved,reject)=>{
// // //             let reached = true
// // //             setTimeout(()=>{
// // //                 if(reached){
// // //                 resolved("Friend2 is Reached Home")
// // //             }
// // //             else{
// // //                 reject("Friend2 Not yet Reached")
// // //             }
// // //             },5000)
// // //         })
// // //         let Friend3 = new Promise((resolved,reject)=>{
// // //             let reached = false
// // //             if(reached){
// // //                 resolved("Friend3 is Reached Home")
// // //             }
// // //             else{
// // //                 reject("Friend3 Not yet Reached")
// // //             }
// // //         })
// // //         // Promise.race([Friend1,Friend2,Friend3]).then((res)=>{
// // //         //     console.log(res);
            
// // //         // }).catch((err)=>{
// // //         //     console.log(err);
            
// // //         // })
// // //         // Promise.any([Friend1,Friend2,Friend3]).then((res)=>{
// // //         //     console.log(res);
            
// // //         // }).catch((err)=>{
// // //         //     console.log(err);
            
// // //         // })
// // //         // Promise.all([Friend1,Friend2,Friend3]).then((res)=>{
// // //         //     console.log(res);
            
// // //         // }).catch((err)=>{
// // //         //     console.log(err);
            
// // //         // })
// // //         // Promise.allSettled([Friend1,Friend2,Friend3]).then((res)=>{
// // //         //     console.log(res);
            
// // //         // }).catch((err)=>{
// // //         //     console.log(err);
            
// // //         // })

// // // const fetchData = new Promise((resolved,reject)=>{
// // //     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
// // //         if(!res.ok){
// // //             reject("Unable to connect")
// // //         }
// // //         else{
// // //             resolved(res.json())
// // //         }
// // //     })
// // // })
// // // fetchData.then((result)=>{
// // //     console.log(result);
    
// // // }).catch((err)=>{
// // //     console.log(err);
    
// // // })
// // //     // async Function
// // const fetchData = async()=>{
// //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// //     try{
// //         if(!res.ok){
// //           throw Error ("Unable to connect");
// //         }
// //         else{
// //             const data = await res.json()
// //             console.log(data)            
// //         }
// //     }catch(err){
// //         console.log(err);
        
// //     }
// // }
// // fetchData()
        
// // //     // fetch
// // //     // try-catch

// // DOM
// // events
// // onclick
// // onchange
// // add event listener

// // let button = document.getElementById('btn')
// // const handleCick = ()=>{
// //     // alert("Button Clicked")
// //     // button.innerHTML=button.innerHTML==="Clicked"?"Click"?"Clicked"
// //     if(button.innerHTML==="Clicked"){
// //         button.innerHTML="Click"
// //     }
// //     else{
// //         button.innerHTML="Clicked"
// //     }
// // }

// let input = document.getElementsByTagName('input')[0]

// let button = document.querySelector('#btn')
// // console.log(input);


// button.addEventListener('click',()=>{
    
//         button.innerHTML="Clicked"
//         console.log(input.value);
        
// })


let btn = document.createElement("button")
// btn.innerText="Login"
// btn.style.backgroundColor="red"
// btn.style.padding=".5rem"
// btn.style.borderRadius="10px"
// btn.style.margin="100px"
// btn.setAttribute("id","buttonred")
// btn.setAttribute("class","newBtn")
let newDiv  = document.createElement("div")
newDiv.style.border = "1px solid red"
newDiv.style.width="400px"
newDiv.style.height = "350px"
let img = document.createElement('img')
img.style.width="75%"
img.style.height="65%"

img.setAttribute("src","data:image/jpeg;base64,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")
let prodName = document.createElement("h3")
prodName.innerText="Toys"
let prodPrice = document.createElement("h2")
prodPrice.textContent="Rs :100"
btn.textContent="Add to Cart"


document.body.append(newDiv)
newDiv.appendChild(img)
newDiv.appendChild(prodName)
newDiv.appendChild(prodPrice)
newDiv.appendChild(btn)





const person = {
    name:"xyz",
    age:20
}


arr = [[70,77,80],[82,55,90]]
console.log(Object.entries(person));

for (let x of arr){
    for(j of x){
        if(j>=70){
            console.log("selected");            
        }
        else{
            console.log("Not selected");            
        }      
    }
    
}