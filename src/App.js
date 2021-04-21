import React,{useState} from "react";
import './App.css';
import Painting from "./components/green.jpg";
import Mask from "./components/sea.jpg";
import Stud from "./components/bridge.jpg";

function App() {
  
const [Img,setImg]=useState(0)

const next = ()=>{
   setImg(Img+1)
    
}
const prev =() => {
    setImg(Img-1)
}


const Images =
    [Painting,Mask,Stud]

 
return(
    <>
    <div className="heading">
        <h3>Slideshow</h3>
    </div>
<div className="slideshow-container">
   <div className="img-box">
   <img  src={Images[Img]} alt="" className="pic"/>
  </div>
  <div className="button-container">
    <button onClick={Img<0?setImg(Images.length-1):prev
    } className="prev">Prev</button>
    <button onClick={Img>Images.length-1?setImg(0):next} className="next">Next</button>
    </div>
    <div className="credits">
    <p>Photo by <a href="https://unsplash.com/@editholic7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kunal Shinde</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
  <p>Photo by <a href="https://unsplash.com/@draufsicht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andreas Gücklhorn</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
  <p>Photo by <a href="https://unsplash.com/@timswaanphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Swaan</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  </div>
    
    </div>
    </>
)
}

export default App;
