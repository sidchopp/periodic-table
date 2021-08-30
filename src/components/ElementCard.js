import React, { useState } from 'react'
import { Card, Icon, Segment, Button, Grid, Header } from 'semantic-ui-react'

// CSS
import '../app.css'

function ElementCard({ atomicMass, atomicNumber, boilingPoint, bondingType, cpkHexColor, density, electronAffinity, electronegativity, electronicConfiguration, groupBlock, ionRadius, ionizationEnergy, meltingPoint, name: Name, oxidationStates, standardState, symbol, vanDelWaalsRadius, yearDiscovered }) {

  // state
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div >
      <Grid celled='internally' columns={18} >
        <Grid.Row >
          <Grid.Column>
            <p>
              <span>Name: {Name}</span>
              <span> {groupBlock}</span>
              <span> Atomic Number:{atomicNumber}</span>
              <span>Symbol: {symbol}</span>
              <span>
                <Button onClick={() => setShowInfo(!showInfo)}>
                  {showInfo ? <Icon name='minus' /> : <Icon name='plus' />}
                </Button>
                <span>
                  {showInfo && <Segment placeholder>
                    <Card>
                      <Card.Content>
                        <Card.Header>{Name}</Card.Header>
                        <Card.Meta>
                          <span className='date'>{boilingPoint}</span>
                          <span className='date'>{electronAffinity}</span>
                          <span className='date'>{electronegativity}</span>
                          <span className='date'>{meltingPoint}</span>
                          <span className='date'>{yearDiscovered}</span>
                        </Card.Meta>
                        <Card.Description>
                          {standardState}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      </Card.Content>
                    </Card>
                  </Segment>
                  }
                </span>
              </span>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ElementCard;
