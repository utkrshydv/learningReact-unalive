function DozenDisplay(props){
  const { weeksArr, yearIndex, weekNum, finalWeek } = props

  return(
    <div className="year-grid">
     {weeksArr.map((week, weekIndex) => {
       const currWeek = yearIndex*52 + weekIndex
       const dotStyle = currWeek == finalWeek - 1? ' solid':
          currWeek < weekNum ?
           ' death' : 
           currWeek == weekNum ?
            ' pulse': ''




       return(
        <div className={'dot '+ dotStyle} key={weekIndex}></div>
       )
     })}
    </div>
  )

}

export default function Calendar(props){

  const { lifeExpectancy, data } = props

  const yearsArr = [...Array(lifeExpectancy).keys()]

  const weeksArr = [...Array(52).keys()]

  const weekNum = lifeExpectancy*52 - parseInt(data['weeks'])

  const finalWeek = lifeExpectancy*52

  return(
    <section>
      <p><i>Each dot represents a week. Each group of dots represent a year</i></p>

      <div className="dozen-grid">
        {yearsArr.map((year, yearIndex) => {
          return(
           <DozenDisplay key={yearIndex} weeksArr={weeksArr} weekNum={weekNum} finalWeek={finalWeek} yearIndex={yearIndex} />
          )
        })}
      </div>
    </section>
  )
}