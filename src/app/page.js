'use client'

import { useEffect, useState } from "react";

import ListItem from "@/components/ListItem";
import Input from "@/components/Input";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const fetchList = () => {
    fetch(`${process.env.apiURL}/api/task`)
      .then(res => res.json())
      .then(res => setTodos(res))
  }

  useEffect(() => {
    fetchList()
  }, []);

  const handleAddNew = (newTodo) => {
    setTodos(prevState => [...prevState, newTodo])
  }

  return (
    <div className="bg-slate-200 min-h-screen text-center pt-20 px-5">
      <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-14">TODO APP</h1>

      <div className="max-w-4xl mx-auto">

        <Input refetch={fetchList} />

        <div className="bg-white rounded-2xl">
          {todos?.map(todo => {
            return ( 
              <ListItem 
                key={todo.id} 
                refetch={fetchList}
                {...todo} 
              /> 
            )}
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo