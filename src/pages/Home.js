import { Link } from "react-router-dom";

function Home (){
    return (
        <>

        <main>
            <h1> Home </h1>
            <Link to="/about">ABOUT</Link>&nbsp;&nbsp;
            <Link to="/items">ITEMS</Link>
        </main>

        </>
    )
}

export default Home;