import React from "react"

function CheeseInfo({info, capitalize}){
  return <div id='cheese-info' key={info.id}>
        <img src={info.image} id="info-image" alt={info.name}/>
        <h3 id="info-name">{capitalize(info.name)}</h3>
        <h4>
          Firmness:
          <p id="info-firmness">{capitalize(info.firmness)}</p>
          Description:
          <p id="info-description">{info.description}</p>
        </h4>

      </div>
}
export default CheeseInfo;