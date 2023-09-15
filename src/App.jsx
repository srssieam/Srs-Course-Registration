
import './App.css'
import Cart from './components/Cart/Cart'
import Cards from './components/cards/cards'

function App() {

  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-center mt-7'>Course Registration</h1>
      </header>
      <main className='flex justify-between gap-6 my-10'>
        <Cards></Cards>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
