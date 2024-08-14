import { Link } from "react-router-dom";
import { ITEMS } from "../data/ItemData";

function Items (){
    return (
        <>

        <main>
            <h1> Items </h1>
        </main>
        <ul>
            {ITEMS.map((item) => ( <Link to={`/items/${item.id}`}> <li>{item.id}</li> </Link>))}
            {/* <Link to="/items/item1"> <li>item1</li></Link>
            <Link to="/items/item2"> <li>item2</li></Link>
            <Link to="/items/item3"> <li>item3</li></Link> */}
        </ul>

        </>
    )
}

export default Items;