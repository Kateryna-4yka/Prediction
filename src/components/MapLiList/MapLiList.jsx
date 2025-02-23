import css from "./MapLiList.module.css"

export default function MapLiList ({el}) {
    return <>
        <img src= {el.image} alt={el.alt} width="100"/>
        <h2>
        {el.title}
        </h2>
        <p>
        {el.text}    
        </p>
  
                </>
   

}