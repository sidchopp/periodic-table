import React from 'react'
import { Card, Icon, Segment, Button } from 'semantic-ui-react'

import '../app.css'

function ElementCard({ details }) {
  console.log(details);



  return (
    <div className='center'>
      <Segment placeholder>
        <Card>
          <Card.Content>
            <Card.Header>{details.Name}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => console.log('hi')}>
              <Icon name='angle double left' />
              Go Back

            </Button>
          </Card.Content>
        </Card>
      </Segment>
    </div>
  )
}

export default ElementCard
