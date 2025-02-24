import css from "./GoodLiList.module.css"

export default function GoodLiList ({cart:{image, alt, title, text }}) {

    return <>
        <img src= {image} alt={alt} width="100"/>
        <h2>
        {title}
        </h2>
        <p>
        {text}    
        </p>
        
    </>
   

}