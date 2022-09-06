import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeItem, editItem}) => {
  return (
    <div className='grocery-container'>
      <div className='grocery-list'>
        <article className='grocery-item'>
          <p className='title'>item</p>
          <div className='btn-container'>
            <button type='button' className='edit-btn' onClick={()=> editItem[id]}>
              <FaEdit />
            </button>
            <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      </div>
      <button className='clear-btn'>clear items</button>
    </div>
  )

}

export default List
