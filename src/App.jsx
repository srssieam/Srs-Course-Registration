
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Cards from './components/cards/cards'

function App() {
  const [selectedCourse, setSelectedCourse]=useState([])
  const [creditHours, setCreditHours]=useState(0);
  const [coursePrice, setCoursePrice]=useState(0)

  const handleSelectBtn= (course, creditHour, price )=>{  // step-6) here it has received the data from Card.jsx 
    const newSelectedCourse = [...selectedCourse, course]
    setCreditHours(creditHours + creditHour);
    setSelectedCourse(newSelectedCourse);
    setCoursePrice(coursePrice + price);
  }
    console.log("selected course is ",selectedCourse);
    console.log('total hours :', creditHours)
    console.log('total price :', coursePrice)
  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-center mt-7'>Course Registration</h1>
      </header>
      <main className='flex justify-between gap-6 my-10'>
        <Cards handleSelectBtn={handleSelectBtn}></Cards>    {/* step-1) here we have passed the function as props to Cards.jsx component */}
        <Cart selectedCourse={selectedCourse} creditHour={creditHours} coursePrice={coursePrice}></Cart>     {/* step-7) here we have passed the selected courses information to Cart.jsx component */}
      </main>
    </>
  )
}

export default App
