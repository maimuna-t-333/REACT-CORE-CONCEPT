import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'


// const fetchUsers=fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())


const fetchFriends=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

const friendsPromise=fetchFriends();

  function handleClick(){
    alert('i am clicked')
  }

  const handleClick3=()=>{
    alert('clicked 3')
  }

  const handleAdd5=(num)=>{
    alert('clicked 3')
  }


  return (
    <>
      
      <h3>Vite + React</h3>
      {/* <Suspense fallback={ <h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

    <Suspense fallback={ <h3>Friends are coming for the treat...</h3>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>

      <Batsman></Batsman>
    <Counter></Counter>



      {/* <button onClick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){alert('clicked 2')}}>Click me2</button>
      <button onClick={handleClick3}>Click me</button>
      <button onClick={()=>alert('click 4')}>Click me 4</button>
      
      <button onClick={()=>handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
