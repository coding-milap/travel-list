import React,{ useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const [items,setItems] = useState([]);
  function onSetItems(item){
    setItems((items)=> [...items,item]);
  }

  function onDeleteItem(id){
    setItems((items)=> items.filter((item)=> id !== item.id));
  }

  function handleToggle(id){
    setItems(items=>items.map(item => id === item.id ? {...item,packed:!item.packed}:item))
  }

  function handleClearList(){
    setItems([])
  }

  return (
    <div>
      <Logo />
      <Form onSetItems={onSetItems} />
      <PackingList onDeleteItem={onDeleteItem} items={items} handleToggle={handleToggle} handleClearList={handleClearList} />
      <Stats items={items} />
    </div>
  )
}

export default App
