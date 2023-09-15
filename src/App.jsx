
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Cards from './components/cards/cards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCourse, setSelectedCourse]=useState([])
  const [creditHours, setCreditHours]=useState(0);
  const [coursePrice, setCoursePrice]=useState(0);
  const [remainingHours, setRemainingHours] = useState(20);
  
  const handleSelectBtn= (course, creditHour, price )=>{  // step-6) here it has received the data from Card.jsx 

    const isAlreadySelected = selectedCourse.find( selected => selected === course )
    if(isAlreadySelected){
      toast.warn("You have already selected this course",{
        position: "top-center"
    });
      return;
    }
    const newSelectedCourse = [...selectedCourse, course]


    const totalHour = creditHours + creditHour
    if(20 < totalHour){
      toast.warn("You don't have enough remaining hours",{
        position: "top-center"
      });
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
        <h1 className='text-4xl font-bold text-center mt-7 px-4'>Course Registration</h1>
        <ToastContainer />
      </header>
      <main className='md:flex justify-between gap-6 my-10 mx-4'>
        <Cards handleSelectBtn={handleSelectBtn}></Cards>    {/* step-1) here we have passed the function as props to Cards.jsx component */}
        <Cart selectedCourse={selectedCourse} creditHour={creditHours} remainingHours={remainingHours} coursePrice={coursePrice}></Cart>     {/* step-7) here we have passed the selected courses information to Cart.jsx component */}
      </main>
    </>
  )
}

export default App
