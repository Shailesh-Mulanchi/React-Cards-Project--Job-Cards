import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
<>
<Cards img="https://plus.unsplash.com/premium_photo-1760460411606-df835aabb111?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" memberId={1} name="Shailesh" address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique!" />
<Cards img="https://plus.unsplash.com/premium_photo-1760386367223-f418541fbc2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715" memberId={2} name="Ram" address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique!" />
<Cards img="https://images.unsplash.com/photo-1745943374767-642a6d7a15ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964" memberId={3} name="Kiran" address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, similique!" />


</>
  )
}

export default App
