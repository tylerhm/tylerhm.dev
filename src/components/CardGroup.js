import './Card.scss'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'

const CardGroup = ({ cardData }) => {

  // Check if a link needs to be followed externally.
  const followLink = meta => {
    if (!meta.external) return
    window.location.href = meta.page
  }

  const { height, width } = useWindowDimensions()
  const cardWidth = 200 + 0.1 * Math.min(height, width)
  const possibleColumns = Math.floor((0.8 * width) / cardWidth)
  const numEntries = Object.keys(cardData).length
  const actualColumns = numEntries >= possibleColumns ? possibleColumns : numEntries
  
  const columnData = []
  for (let i = 0; i < actualColumns; i++)
    columnData.push([])

  // Create card renderable for every card data
  let index = 0
  for (const [title, meta] of Object.entries(cardData)) {
    columnData[index % actualColumns].push(
      <Link
        key={`card-${meta.page}`}
        to={meta.external ? '/home' : `/${meta.page}`}
        onClick={() => followLink(meta)}>
        <Card style={{width: `${cardWidth}px`}}>
          <Card.Header>
            <Card.Img variant='top' src={meta.image} />
          </Card.Header>
          <Card.Body>
            <Card.Title className='CardHeader'>{title}</Card.Title>
            <Card.Text className='CardText'>
              {meta.body}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    )
    index++
  }

  const columns = []
  columnData.forEach((col, index) => {
    columns.push(
      <div
        key={`${actualColumns}-${index}`}
        className='Column'
      >
        {col}
      </div>
    )
  })

  return (
    <div className='ColumnContainer'>
      {columns}
    </div>
  )
}

CardGroup.propTypes = {
  cardData: PropTypes.object.isRequired,
}

export default CardGroup
