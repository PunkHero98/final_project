import './style/App.css'
import { SearchBox } from './components/SearchBox';
import { useState } from 'react';
import {Tabs , Checkbox , Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
function App() {
const [todos, setTodos] = useState([]);
const handleAddTodo = (todos) => {
  setTodos((prev) => [...prev, todos]);
};
const handleCheckbox = (index) =>{
  const newTodos = [...todos];
  newTodos[index].done = !newTodos[index].done;
  setTodos(newTodos);
};
const handleDelete = (index) =>{
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};
const handleDeleteAll = () => {
  setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
};

const items = [
  {
    key: "1",
    label: "All",
    children: (
      <>
        <SearchBox handleAddTodo={handleAddTodo} />
        <div className="flex flex-col gap-6 mt-8">
          {todos.map((todo, index) => (
            <Checkbox key={index} checked={todo.done} onChange={() => handleCheckbox(index)}>
              <span className={`text-2xl ${todo.done && "line-through"}`}>
                {todo.name}
              </span>
            </Checkbox>
          ))}
        </div>
      </>
    ),
  },
  {
    key: "2",
    label: "Active",
    children: (
      <>
        <SearchBox handleAddTodo={handleAddTodo} />
        <div className="flex flex-col gap-6 mt-8">
          {todos.map((todo, index) => {
            if (!todo.done) {
              return (
                <Checkbox key={index} checked={todo.done} onChange={() => handleCheckbox(index)}>
                  <span className={`text-2xl ${todo.done && "line-through"}`}>
                    {todo.name}
                  </span>
                </Checkbox>
              );
            }
          })}
        </div>
      </>
    )
  },
  {
    key: "3",
    label: "Completed",
    children: (
      <>
        <SearchBox handleAddTodo={handleAddTodo} />
        <div className="flex flex-col gap-6 mt-8">
          {todos.map((todo, index) => {
            if (todo.done) {
              return (
                <>
                <div className='flex justify-between items-center'>
                  <Checkbox key={index} checked={todo.done} onChange={() => handleCheckbox(index)}>
                    <span className={`text-2xl ${todo.done && "line-through"}`}>
                      {todo.name}
                    </span>
                  </Checkbox>
                  <DeleteOutlined className='text-2xl' onClick={() => handleDelete(index)} />
                </div>
                
                </>
              );
            }
          })}
          <div className='flex justify-end'>
            <Button icon={<DeleteOutlined />} variant='solid' color='danger' size='large' onClick={handleDeleteAll}>Delete All</Button>
          </div>
        </div>
      </>
    ),
  },
];

  return (
    <>
      <main className='w-full h-screen p-8 flex justify-center '>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold text-center mb-8'>#todo</h1>
          <Tabs size="large" defaultActiveKey="1" centered items={items} />
        </div>
      </main>
    </>
  )
}

export default App
