// // Hoisting
//     //variable declaration
//         //var
//         console.log(a);
//         var a = 10
//         //start with letter
//         // dont use space and -
//         //meaning full names
//         // dont use js names for varible dec
//         var a =20
        
        
//         // let
//         // console.log(b);
//         let b;
//     console.log(b);
        
        
//         //const
//         const c =60;
//         // c=80
//         console.log(c);
// block scope or local scope
// {
//     var v = 60
//     // console.log(v);
    
// }
// console.log(v);
// {
//     let v = 60
//     // console.log(v);
    
// }
// console.log(v);

//function scope or Global scope
// function add(){
//     let b=20
// //     {
// //         console.log(b);
        
// //     }
// // }
// // add()

// //data types
//     // premitive data types
//         // number
//             var num = 50.60
//             console.log(typeof(num));
            
//         // string
//             let name = "xyz"
//             console.log(typeof(name));
            
//         // boolean
//         isAlive = true
//         console.log(typeof(isAlive));
        
//         // undefined
//         let c
//         console.log(typeof(c));
        
//         // Null
//         let d=null
//         console.log(typeof(d));
        
//         // Nan - Not an Number
    
//         // non premitive
//             //array - index of array
//             let arr = [10,"abc",true,undefined]
//             console.log(typeof(arr));
//             console.log(arr);
//             console.log(arr[0]);
//             console.log(arr[1]);
// //             console.log(arr[2]);
// //             console.log(arr[3]);

// //             console.log(arr.length);
            
            
// //             // object - Key of Object
// //             person = {
// //                 name:"abc",
// //                 age:20,
// //                 family:{
// //                     father:"def",
// //                     mother:"hjgj",
// //                     siblings:{
// //                         brother:"trfv",
// //                         sister:"hghfhg"
// //                     }
// //                 }
// //             }
// //             console.log(person);
// //             console.log(person.name);
// //             console.log(person.family.siblings);
// //operators
//     //arithmetic   +,-,*,/,%,++,--
//     let b= 21
//     let a= 40
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
//     console.log(a%b);
//     // a=a+1
//     console.log(++a); 
//     // a=41
//     console.log(a++);
//     // o a = 41
//     // a=42
//     console.log(a);
     
//     console.log(--b);
//     console.log(b--);
//     // comparison
//             // ==,===,!= ,<,>,<=,>=
           
//             console.log(a==b);
//             console.log(a>b);
//             console.log(a<b);
//             console.log(a<=b);
//             console.log(a>=b);
//             console.log(a!=b);
//             let num1 = 10
//             let num2 = "10"
//             console.log(num1==num2);
//             console.log(num1===num2);
            

            

//     // logical
//             // And && OR || 
//         let age = 18
//         let location1 = "TNE"
//        let nationality="Uk"
//         console.log(age>18 && location1=="TN" && nationality=="IN" );
//         console.log(age>18 || location1=="TN" || nationality=="IN" );
        
//     // assigment operator
//         // =,+=,*=,-=,/=
//         // a=a+b
        
        
//         a+=b
//         console.log(a);
//         e=5
//         f=10
//         e*=f
//         console.log(e);
        
//     // ternary
//     console.log(age>=18?"Adult":"Teenager");
    
// // function
//     function addtion(num1,num2){
//         return num1+num2        
//     }
//     console.log(addtion(50,44));
//     // console.log(94);
    
    
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)
//     // addtion(50,44)

//     // types
//         //arrow
//             const arrow = (c,d)=> {return num1*num2}
//             console.log(arrow(28,88));
            

//             const add = (a,b)=>{
//                 return a+b
//             }
//             console.log(add(10,50));
            
//         //IIFI
//         const IIFI = (function(g){
//             console.log(g);
            
//         })
//         IIFI(100)
//         // ananoums
//         const ana = function(){
            
//         }

// // Conditional Statements
//         // if
//         let age =19
//         natinality = "IN"
//         locality = "TN"
//         // if(age>=18 &&locality=="TN" ){
//         //     console.log("He is Eligible to vote")            
//         // }
//         // ifelse
//         if(age>=18 && locality=="TN"){
//             console.log("He is Eligible to vote");
            
//         }else{
//             console.log("Not Eligilble");
            
//         }

//         let mark =81
//         if(mark>90){
//             console.log("Grade A");            
//         }
//         else if(mark>80){
//             console.log("Grade B");            
//         }
//         else if(mark>70){
//             console.log("Grade C");
            
//         }
//         else{
//             console.log("Pass");            
//         }
//         if(age>=18){
//             if(natinality=="IN"){
//                 if(location=="TN"){
//                     console.log("Eligible to vote");                    
//                 }else{
//                     console.log("He is Not Eligible because he not from TN");                    
//                 }
//             }else{
//                 console.log("He is Not Indian");                
//             }
//         }
//         else{
//             console.log("Not Eligible");            
//         }
// // switch
// userEmail = "abc@gmail.com"
// switch(userEmail){
//     case "abc@gmail.com":
//         console.log("He is abc In our Db");  
//         break
//     case "abe@gmail.com":
//         console.log("He is abe In our Db"); 
//         break
//     case "def@gmail.com":
//         console.log("He is def In our Db"); 
//         break
//     case "xyz@gmail.com":
//         console.log("He is xyz In our Db");
//         break
//     default:
//         console.log("He is new to our Db");
          
// }
// // looping Statements
//     // while
//         let a=10
//         while(a<=15){
//             console.log("While is working");
//             a++
//         }
        let marks = [80,90,70,88,66]
       
    //     let c = 0
    //     while(c<marks.length){
    //         console.log(marks[c]);
    //         // c=0 marks[0] = 80
    //         // c=1 marks[1] = 90
    //         // c=2 marks[2] = 70
    //         // c=3 marks[3] = 88
    //         // c=4 marks[4] = 66
    //         c++
            
    //     }
    // //do while
    // do{
    //     console.log("Do while is working");
        
    // }while(c<marks.length)
    // // for
    // let total = 0
    //     for(let x =0;x<marks.length;x++){
    //         total+=marks[x]
    //         // total = 0+80 = 80
    //         // total = 80+90 = 170
    //         // total = 170+70 = 240
    //         // total = 240+88 = 328
    //         // total = 328+66 = 394
    //         console.log(marks[x]);            
    //     }
    //     console.log(total);
        
    //     // for of
    //         for(let x of marks){
    //             console.log(x);                
    //         }
    //     // for in
    //     for(let x in marks){
    //             console.log(marks[x]);                
    //         }
        // foreach
        marks.forEach((item)=>console.log(item))
        let names = "Anandh"
        // output
        // A
        // An
        // Ana
        // Anan
        // Anand
        // Anandh

        // h
        // hd
        // hdn
        // hdna
        //hdnan
        // hdnana
