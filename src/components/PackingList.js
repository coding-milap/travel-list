import React, { useState } from 'react'
import Item from './Item';

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
//   ];


function PackingList({items, onDeleteItem, handleToggle, handleClearList}) {
  const [sortBy,setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed));
  return (
    <div className='list'> 
        <ul>
      {sortedItems.map((item) => 
        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} handleToggle={handleToggle} />
      )}
    </ul>
    <div className='actions' >
      <select  value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value='input'>Sort By the input order</option>
        <option value='description'>Sort By the description</option>
        <option value='packed'>Sort By the packed status</option>


      </select>
      <button onClick={handleClearList}>Clear List</button>
    </div>
    </div>
  )
}

export default PackingList
