
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Cards from './components/cards/cards'

function App() {
  const [selectedCourse, setSelectedCourse]=useState([])
  const [creditHours, setCreditHours]=useState(0);
  const [coursePrice, setCoursePrice]=useState(0);
  const [remainingHours, setRemainingHours] = useState(20);

  const handleSelectBtn= (course, creditHour, price )=>{  // step-6) here it has received the data from Card.jsx 

    const isAlreadySelected = selectedCourse.find( selected => selected === course )
    if(isAlreadySelected){
      alert("You have already selected this cours");
      return;
    }
    const newSelectedCourse = [...selectedCourse, course]


    const totalHour = creditHours + creditHour
    if(20 < totalHour){
      alert("You don't have enough time");
      return;
    }
    setCreditHours(totalHour);
    setRemainingHours(remainingHours- creditHour);
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
        <Cart selectedCourse={selectedCourse} creditHour={creditHours} remainingHours={remainingHours} coursePrice={coursePrice}></Cart>     {/* step-7) here we have passed the selected courses information to Cart.jsx component */}
      </main>
    </>
  )
}

export default App
