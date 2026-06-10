import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return(
    <h1>hello</h1>
  )


const Users = [
  {id: 1, name: 'Дима', age: 23},
  {id: 2, name: 'Вася', age: 18},
  {id: 3, name: 'Саша', age: 6},
  {id: 4, name: 'Настя', age: 12},
  {id: 5, name: 'Алина', age: 44}
]

function UserList({users}){
  return(
    <ul>{users.map(user=>(
      <li>
        key={user.id},{user.name},{user.age}
      </li>
    ))}</ul>
  )
}}

export default App
