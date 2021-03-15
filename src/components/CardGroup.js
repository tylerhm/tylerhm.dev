import './Card.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardGroup = ({ cardData }) => {

  const cards = [];

  for (const [title, meta] of Object.entries(cardData)) {
    cards.push(
      <Card key={`card-${meta.page}`}>
        <Card.Img variant='top' src={meta.image} />
        <Card.Body>
          <Card.Title className='CardHeader'>{title}</Card.Title>
          <Card.Text className='CardText'>
            {meta.body}
          </Card.Text>
          <Link to={`/${meta.page}`}>
            <Button variant='primary'> Check it out! </Button>
          </Link>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className='CardPicker'>
      {cards}
    </div>
  )
}

CardGroup.propTypes = {
  cardData: PropTypes.object.isRequired
}

export default CardGroup;
