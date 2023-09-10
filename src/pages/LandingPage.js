import alien from "../pages/assets/icons/alien.png";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    };
    return (
        <div className = "text-center">
            <p className = "text-mono font-bold uppercase"> 
            About Me
            </p>
            <div className = "flex justify-center">
                <img
                    src ={alien}
                    alt = "alien"
                    className = "w-[15%] my-2 bg-white rounded-full p-1"
                />
            </div>
            <p className = "text-md mt-2 font-bold text-white mx-36"> 
            <p>Why do we use it?</p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using 
            'Content here, content here', making it look like readable English. 
            Many desktop publishing packages and web page editors now use Lorem Ipsum 
            as their default model text, and a search for 'lorem ipsum' 
            will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose
            </p>
            <button className = "text-xl text-white underline" 
            onClick = {() => handleToDetail()} > NEXT </button>
        </div>
    );
}

export default LandingPage;