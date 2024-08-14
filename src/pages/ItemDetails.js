import { useParams } from "react-router-dom"
import {ITEMS} from "../data/ItemData";

function ItemDetails(){
    // const params = useParams();
    const {id} = useParams();
    const item = ITEMS.find((item) => item.id === id);
    console.log(item)

    return(
        <>
        <main> <h1>Item Details</h1> </main>
        {/* <h2>{params.id}</h2> */}
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        </>
    )

}

export {ItemDetails}