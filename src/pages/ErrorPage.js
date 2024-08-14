import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage (){
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=> navigate("/"), 20000);
    }, [navigate]);

    return (
        <>
            <h1> OOPS!!!!! Something Went Wrong..... </h1>
            <div className="not-found page">
            <h3>Page not found.</h3>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="not found"
            />
            <h3><button onClick={() => navigate(-1)}>Back to previous page...</button></h3>
            </div>

        </>
    )
}

export default ErrorPage;