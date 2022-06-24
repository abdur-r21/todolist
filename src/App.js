/* eslint-disable */
import { useState } from "react"
import "./App.css"

function App() {
  const [todoList, setTodoList] = useState([])
  const [form, setForm] = useState({
    todo: "",
    status: false,
  })

  const resetInput = () => {
    setForm({
      todo: "",
      status: false,
    })
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setForm({
      ...form,
      todo: e.target.value,
      status: false,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.index || form.index === 0) {
      const newTodo = todoList.map((e, i) => {
        if (i === form.index) {
          return form
        } else {
          return e
        }
      })
      setTodoList(newTodo)
    } else {
      setTodoList([...todoList, form])
    }
    resetInput()
  }

  const handleCheck = (index) => {
    const newTodo = todoList.map((e, i) => {
      if (i === index) {
        return {
          todo: e.todo,
          status: true,
        }
      } else {
        return e
      }
    })
    setTodoList(newTodo)
  }

  const handleDelete = (index) => {
    const newTodo = todoList.filter((e, i) => {
      if (i !== index) {
        return e
      }
    })
    setTodoList(newTodo)
  }

  const handleEdit = (index) => {
    const detailTodo = {
      index,
      ...todoList[index],
    }
    setForm(detailTodo)
    console.log(detailTodo)
  }
  return (
    <div>
      <div className="jumbotroon">
        <h1>To Do List App</h1>
        <form className="form" method="Post" onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            value={form.todo}
            onChange={handleChange}
            placeholder="todo..."
          />
          <button type="Submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="content">
        {todoList.map((e, i) => (
          <div key={i} className="card">
            <div className="action">
              <input
                type="checkbox"
                checked={e.status ? true : false}
                onChange={() => handleCheck(i)}
              />
            </div>
            <div className="text">{e.todo}</div>
            <div className="button-action">
              <button className="btn-edit" onClick={() => handleEdit(i)}>
                Edit
              </button>
              <button className="btn-delete" onClick={() => handleDelete(i)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
