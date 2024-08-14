import { Link } from "react-router-dom";

function Items (){
    return (
        <>

        <main>
            <h1> Items </h1>
        </main>
        <ul>
            <Link to="/items/item1"> <li>item1</li></Link>
            <Link to="/items/item2"> <li>item2</li></Link>
            <Link to="/items/item3"> <li>item3</li></Link>
        </ul>

        </>
    )
}

export default Items;