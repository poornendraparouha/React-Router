import { useParams } from "react-router-dom"

function ItemDetails(){
    const params = useParams();
    console.log(params)

    return(
        <>
        <h1>Item Details</h1>
        <h2>{params.itemId}</h2>
        </>
    )

}

export {ItemDetails}