import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prevMenuItems) => [newMenuItem, ...prevMenuItems])
      setNewMenuItem("")
    }
  }, [newMenuItem])

  const filteredMenuItems = menuItems.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  )


  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        />
        <br />
        <button onClick={addMenuItem}>  {}
          Add Item
        </button>
        <br />
        <input
          id="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)} 
          placeholder="Filter by..."
        />
  
        {}
        <ul>
          {filteredMenuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
