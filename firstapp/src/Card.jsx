import Button from './Button'
const Card = ({image,x,y,des})=>{
    return(
        <div className="cards" >
            <div className="topSection">
                <img src={image}></img>
            </div>
            <div className="bottomSection">
                <h3>{x}</h3>
                <h3>{y}</h3>
                <p>{des}</p>
                <Button value = "add to cart"></Button>
            </div>
        </div>
    )
}
export default Card