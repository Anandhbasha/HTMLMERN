export const read = (req,res)=>{
    res.json("Node js is perfectly working");    
}

export const insert = (req,res)=>{
    const {userName,Password} = req.body
    res.json(`The userName is ${userName},The user Password is ${Password}`)
}
export const edit = (req,res)=>{
    const {id} = req.params
    const {userName} = req.body
    res.json(`The ${id} of the userName is ${userName} is Updated`)
}
export const deleteUser = (req,res)=>{
    const {id} = req.params
    res.json(`The ${id} of the user is Deleted Succesfully`)
}