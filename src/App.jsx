import { useState, useEffect } from "react"
import Calendar from "./components/Calendar"
import Summary from "./components/Summary"
import Clocks from "./components/Clocks"
import Hero from "./components/Hero"
import Layout from "./components/layouts/Layout"

import { calculateTimeLeft, getLifePercentageLived } from "./utils/index"
import Portal from "./components/Portal"
import Form from "./components/Form"


function App() {

  const [name, setName] = useState('Utkarsh')
  const [birthDate, setBirthDate] = useState('2004-08-16')

  const [lifeExpectancy, setLifeExpectancy] = useState(80)

  const [showModal, setShowModal] = useState(true)

  const [data, setData] = useState(calculateTimeLeft(birthDate, lifeExpectancy))

  function handleToggleModal(){
    setShowModal(curr => !showModal)
  }

  function resetData(){
    setName('Utkarsh')
    setBirthDate('2004-08-16')
    setLifeExpectancy(80)
    localStorage.clear()
  }

  function handleUpdateData(n, b, e){
    if(!n || !b || !e){ return }

    localStorage.setItem('formData', JSON.stringify({
      name: n,
      birthDate: b,
      lifeExpectancy: e
    }))

    setName(n)
    setBirthDate(b)
    setLifeExpectancy(parseInt(e))  
    handleToggleModal()
  }
  
  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  useEffect(() => {
    if(!localStorage) { return }
    if(localStorage.getItem('formData')){
      const {name: n, birthDate: b, lifeExpectancy: e} = JSON.parse(localStorage.getItem('formData'))
      setName(n)
      setBirthDate(b)
      setLifeExpectancy(parseInt(e))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setData(calculateTimeLeft(birthDate, lifeExpectancy))
    }, 1000)
    return () => { clearInterval(interval)}
  }, [birthDate, lifeExpectancy])
 
 
  return (
    
     <Layout>
     {showModal && (<Portal 
      handleCloseModal={handleToggleModal}
     >
        <Form 
        name={name}
        setName={setName}
        lifeExpectancy={lifeExpectancy}
        setLifeExpectancy={setLifeExpectancy}
        handleUpdateData={handleUpdateData}
        handleCloseModal={handleToggleModal}
        />
      </Portal>)}
      <Hero 
      resetData={resetData}
      handleToggleModal={handleToggleModal}
      name={name} 
      data={data}
       percentage={percentage} />
      <Clocks data={data} />
      <Calendar lifeExpectancy={lifeExpectancy} data={data} />
      <Summary lifeExpectancy={lifeExpectancy} birthDate={birthDate}/>
     </Layout>
  
  )
}

export default App
