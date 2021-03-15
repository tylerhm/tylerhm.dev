import './Card.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardGroup = ({ cardData, title }) => {

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
            <Button variant='primary'>Check it out!</Button>
          </Link>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div>
      <h5>
        {title}
      </h5>
      <div className='CardPicker'>
        {cards}
      </div>
    </div>
  )
}

CardGroup.propTypes = {
  cardData: PropTypes.object.isRequired,
  title: PropTypes.string,
}

export default CardGroup;
