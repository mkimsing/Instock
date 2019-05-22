import React from 'react'
import InventoryTable from './InventoryTable'

export default function Inventory() {
  return (
    <div className="inventoryPage">
      <div className='inventoryPage__header'>
        <h1>Inventory</h1>
        <input placeholder='Search' />
      </div>
      <InventoryTable />
    </div>
  )
}
