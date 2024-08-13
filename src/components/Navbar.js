import { Link, Outlet, NavLink } from "react-router-dom";

function Navbar (){
    return (
        <>
            <div className="nav">
                <NavLink style={({isActive}) => isActive? {color:'blue'} : undefined } to="/home"><h4>HOME</h4></NavLink>
                <NavLink style={({isActive}) => isActive? {color:'blue'} : undefined } to="/about"><h4>ABOUT</h4></NavLink>
                <NavLink style={({isActive}) => isActive? {color:'blue'} : undefined } to="/items"><h4>ITEMS</h4></NavLink>
            
            {/* changed all the link tags to navlink  */}

            {/* <Link to="/"> <h4>HOME</h4> </Link>
            <Link to="/about"> <h4>ABOUT</h4> </Link>
            <Link to="/items"> <h4>ITEMS</h4> </Link> */}

        </div>

        {/* Outlet is displaying all the {childrens} pages and there content */}
        <Outlet/>
        </>   
    )
}
export default Navbar;