import { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import PropTypes from 'prop-types'

// Extension of Bootstrap's NavDropdown component
// Maintains currently selected element
const ContextualDropdown = ({ id, items, defaultSelected, callback }) => {
  // Selected item is stateful
  const [selectedItem, setSelectedItem] = useState(defaultSelected)

  // Sets the currently selected item
  const selectItem = (key) => {
    setSelectedItem(key)

    if (callback !== undefined)
      callback(selectedItem)
  }

  // The renderable dropdown items
  const dropdownItems = []

  // Add all items as dropdowns
  items.forEach(element => {
    dropdownItems.push(
      <NavDropdown.Item onClick={() => selectItem(element)}>
        {element}
      </NavDropdown.Item>
    )
  })
  
  return (
    <NavDropdown
      title={selectedItem}
      id={id}
    >
      {dropdownItems}
    </NavDropdown>
  )
}

ContextualDropdown.propTypes = {
  id: PropTypes.string,
  items: PropTypes.array,
  defaultSelected: PropTypes.string,
  callback: PropTypes.func
}

export default ContextualDropdown