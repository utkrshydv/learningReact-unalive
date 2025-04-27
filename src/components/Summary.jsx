export default function Summary(props){
  const { lifeExpectancy, birthDate } = props

  const finalYear = parseInt(birthDate.split('-')[0]) + lifeExpectancy
  return(
    <section id="summary">
      <div>
        <p className="text-gradient">
          <i className="fa-solid fa-heart-crack" /> You&apos;ll probably die in the year <strong>{finalYear}</strong> at the age of <strong>{lifeExpectancy}</strong>
        </p>
      </div>
      <h4>yesterday was history, tomorrow is a mystery and today is a gift.</h4>
      <h4>Master Oogway</h4>
    </section>
  )
}