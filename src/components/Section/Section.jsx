import css from "./Section.module.css"
import MapLiList from "../MapLiList/MapLiList"
import mapListInfo from "../MapLiList/MapListInfo.json"

export default function Section () {

return<div className='section'>
    <div className='container'>

        <h1 className={css.text}>Prediction for you</h1>
<ul>
{mapListInfo.map(el => (
          <li key={el.id} >
            <MapLiList el={el} />
          </li>
        ))}
</ul>


    </div>
</div>


}