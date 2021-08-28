import React from 'react'
import { Card, Icon, Segment, Button } from 'semantic-ui-react'

import '../app.css'

function ElementCard({ props }) {
  console.log(props);



  return (
    <div className='center'>
      <Segment placeholder>
        <Card>
          <Card.Content>
            <Card.Header>{props.Name}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => props}>
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
