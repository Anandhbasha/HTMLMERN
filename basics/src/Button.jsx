const Button = ({color,x})=>{
    return(
        <div className="btn">
            <button style={{backgroundColor:color}}>{x}</button>
        </div>
    )
}

export default Button