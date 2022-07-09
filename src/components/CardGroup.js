import './Card.scss'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'

const CardGroup = ({ cardData }) => {
  const { height, width } = useWindowDimensions()
  const cardWidth = 200 + 0.1 * Math.min(height, Math.min(1500, width))
  const possibleColumns = Math.floor((0.9 * Math.min(1500, width)) / cardWidth)
  const numEntries = Object.keys(cardData).length
  const actualColumns =
    numEntries >= possibleColumns ? possibleColumns : numEntries

  const columnData = []
  for (let i = 0; i < actualColumns; i++) columnData.push([])

  // Create card renderable for every card data
  let index = 0
  for (const [title, meta] of Object.entries(cardData)) {
    const card = (
      <Card style={{ width: `${cardWidth}px` }}>
        <Card.Header>
          <Card.Img variant='top' src={meta.image} />
        </Card.Header>
        <Card.Body>
          <Card.Title className='CardHeader'>{title}</Card.Title>
          <Card.Text className='CardText'>{meta.body}</Card.Text>
        </Card.Body>
      </Card>
    )

    columnData[index % actualColumns].push(
      meta.external ? (
        <a key={`card-${meta.page}`} href={meta.page} target='__blank'>
          {card}
        </a>
      ) : (
        <Link key={`card-${meta.page}`} to={`/${meta.page}`}>
          {card}
        </Link>
      )
    )
    index++
  }

  const columns = columnData.reduce((columns, col, index) => {
    return [
      ...columns,
      <div key={`${actualColumns}-${index}`} className='Column'>
        {col}
      </div>,
    ]
  }, [])

  return <div className='ColumnContainer'>{columns}</div>
}

CardGroup.propTypes = {
  cardData: PropTypes.object.isRequired,
}

export default CardGroup
