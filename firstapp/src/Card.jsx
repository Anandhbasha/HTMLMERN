// import Button from './Button'
// const Card = ({image,x,y,des})=>{
//     return(
//         <div className="cards" >
//             <div className="topSection">
//                 <img src={image}></img>
//             </div>
//             <div className="bottomSection">
//                 <h3>{x}</h3>
//                 <h3>{y}</h3>
//                 <p>{des}</p>
//                 <Button value = "add to cart"></Button>
//             </div>
//         </div>
//     )
// }
// export default Card
import Button from './Button'
const Card = ({image,prodName,price,ProdDes,NewFea})=>{
    return(
        <div className="cards" >
            <div className="topSection">
                <img src={image}></img>
            </div>
            <div className="bottomSection">
                <h3>{prodName}</h3>
                <h3>{price}</h3>
                <p>{ProdDes}</p>
                <Button value = "add to cart"></Button>
            </div>
        </div>
    )
}
export default Card