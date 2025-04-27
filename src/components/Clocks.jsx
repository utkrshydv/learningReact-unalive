import { getTimePercentage } from "../utils"

function Clock(props){

  const { percent, title, data } = props

  return(
    <div className="card clock-card">
    <div className="circle" style={{transform: `rotate(${Math.round(percent)}deg)`}}>
      <div className={"ticker "+ title}></div>
    </div>
    <div>
      <h5>{data}</h5>
      <h5>{title}</h5>
    </div>
  </div>
  )
}


export default function Clocks(props){

  const { data } = props
  const snapshot = getTimePercentage()
  return(
    <section>
      <p><i>Time remaining in dfferent units.</i></p>
      <div className="clocks-grid">
     {Object.keys(data).map((clock, clockIndex) => {
      return(
        <Clock 
        data={data[clock]} 
        title={clock}
        key={clockIndex}
        percent={snapshot[clock]}
        />
      )
     })}
      </div>
    </section>
  )
}