// import Button from "./Button"
// import Card from "./Card"
// import Shirtimage from './assets/Image/Shirt.jpeg'
// import Shirtimage1 from './assets/Image/Shirt.jpeg'

// const btn_values = ["click","Login","submit","delete","Update"] 
// const cardDetails = [
//   {
//     image:Shirtimage,
//     prodName:"Mens Shirt",
//     price:400,
//     ProdDes:"Something"
//   },
//   {
//     image:Shirtimage1,
//     prodName:"Mens Half Sleeve Shirt",
//     price:400,
//     ProdDes:"Something"
//   }
// ]
// const App = ()=>{
//   return(
//     <div className="App" style={{marginLeft:"100px"}}>
//       <h1>Hello welcome to react</h1>
//       <h2>This is Basics of react</h2>
//       {/* {
//         btn_values.map((item)=>(
//           <Button value = {item}/>
//         ))
//       } */}
//      {/* <div className="card">
//        <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//       <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//       <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//       <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//       <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//       <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//       <Card image = {Shirtimage}  x="Mens Shirt" y="RS:400" des="Lorem New"/>
//      </div> */}
//      <div className="card">
//       {
//         cardDetails.map((item)=>(
//           <Card {...item}/>
//         ))
//       }
//      </div>
//     </div>
    
//   )
// }
// export default App


















 import Card from './Card'
  const cardDetails = [
  {
    image:Shirtimage,
    prodName:"Mens Shirt",
    price:400,
    ProdDes:"Something"
  },
  {
    image:Shirtimage1,
    prodName:"Mens Half Sleeve Shirt",
    price:400,
    ProdDes:"Something",
    NewFea :"NBHJBKBKb"
  }
]
const App = ()=>{

  return(
    <div className="Card">
      {cardDetails.map((item)=>(
        <Card  {...item}/>
      ))}
    </div>
  )
}
export default App