import './Card.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'

const CardGroup = ({ cardData, title }) => {

  const { height, width } = useWindowDimensions()
  const cardWidth = 150 + 0.1 * Math.min(height, width)
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
      <Card key={`card-${meta.page}`} style={{width: `${cardWidth}px`}}>
        <Card.Img variant='top' src={meta.image} />
        <Card.Body>
          <Card.Title className='CardHeader'>{title}</Card.Title>
          <Card.Text className='CardText'>
            {meta.body}
          </Card.Text>
          <Link to={`/${meta.page}`}>
            <Button variant='primary'>Check it out!</Button>
          </Link>
        </Card.Body>
      </Card>
    )
    index++
  }

  const columns = []
  columnData.forEach(col => {
    columns.push(
      <div className='Column'>
        {col}
      </div>
    )
  })

  return (
    <div>
      <h5>
        {title}
      </h5>
      <div className='ColumnContainer'>
        {columns}
      </div>
    </div>
  )
}

CardGroup.propTypes = {
  cardData: PropTypes.object.isRequired,
  title: PropTypes.string,
}

export default CardGroup
