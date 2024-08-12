import { Link } from "react-router-dom";

function Navbar (){
    return (
        <>
            <div className="nav">
            <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/items">ITEMS</Link>
            {/* <div>ABOUT</div>
            <div>ABOUT</div>
            <div>ITEMS</div> */}
        </div>
        </>   
    )
}
export default Navbar;