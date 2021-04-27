import { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import PropTypes from 'prop-types'

// Extension of Bootstrap's NavDropdown component
// Maintains currently selected element
const ContextualDropdown = ({ id, items, defaultSelected, updateSelected }) => {
  // Selected item is stateful
  const [selectedItem, setSelectedItem] = useState(defaultSelected)

  // Sets the currently selected item
  const selectItem = (index) => {
    setSelectedItem(items[index])

    if (updateSelected !== undefined)
      updateSelected(index)
  }

  // The renderable dropdown items
  const dropdownItems = []

  // Add all items as dropdowns
  items.forEach((element, index) => {
    dropdownItems.push(
      <NavDropdown.Item
        key={index}
        onClick={() => selectItem(index)}
      >
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
  updateSelected: PropTypes.func
}

export default ContextualDropdown