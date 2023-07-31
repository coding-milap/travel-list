import React from 'react'

function Stats({items}) {

  const packedItems =items.filter((item)=> item.packed)
  

  return (
    <footer className='stats'>
      <em>
        You have {items.length} items on your list, and you already packed {packedItems.length} ( {(packedItems.length / items.length)*100} %)
      </em>
    </footer>
  )
}

export default Stats
