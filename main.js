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
//     {
//         console.log(b);
        
//     }
// }
// add()

//data types
    // premitive data types
        // number
            var num = 50.60
            console.log(typeof(num));
            
        // string
            let name = "xyz"
            console.log(typeof(name));
            
        // boolean
        isAlive = true
        console.log(typeof(isAlive));
        
        // undefined
        let c
        console.log(typeof(c));
        
        // Null
        let d=null
        console.log(typeof(d));
        
        // Nan - Not an Number
    
        // non premitive
            //array - index of array
            let arr = [10,"abc",true,undefined]
            console.log(typeof(arr));
            console.log(arr);
            console.log(arr[0]);
            console.log(arr[1]);
            console.log(arr[2]);
            console.log(arr[3]);

            console.log(arr.length);
            
            
            // object - Key of Object
            person = {
                name:"abc",
                age:20,
                family:{
                    father:"def",
                    mother:"hjgj",
                    siblings:{
                        brother:"trfv",
                        sister:"hghfhg"
                    }
                }
            }
            console.log(person);
            console.log(person.name);
            console.log(person.family.siblings);
            