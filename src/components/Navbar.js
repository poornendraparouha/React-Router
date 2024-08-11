
function Navbar ({setPage}){
    return (
        <>
        <div className="Nav">
            <div className={""} onClick={() => ("home")}>HOME</div>
            <div className={""} onClick={() => ("about")}>ABOUT</div>
            <div className={""} onClick={() => ("items")}>ITEMS</div>
        </div>
        </>   
    )
}
export default Navbar;