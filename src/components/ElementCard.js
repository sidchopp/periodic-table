import React, { useState } from 'react'
import { Card, Icon, Segment, Button, Grid, Header } from 'semantic-ui-react'

// CSS
//import '../app.css'

// function ElementCard({ atomicMass, atomicNumber, boilingPoint, bondingType, cpkHexColor, density, electronAffinity, electronegativity, electronicConfiguration, groupBlock, ionRadius, ionizationEnergy, meltingPoint, name: Name, oxidationStates, standardState, symbol, vanDelWaalsRadius, yearDiscovered }) {

function ElementCard({ name, appearance, atomic_mass, boil, category, density, color, discovered_by, melt, molar_heat, named_by, number, period, phase, source, spectral_img, summary, symbol, xpos, ypos, shells, electron_configuration, electron_configuration_semantic, electron_affinity, electronegativity_pauling, ionization_energies, hex }) {



  // state
  const [showInfo, setShowInfo] = useState(false);

  return (
    < >
      {symbol}
      {/* <Grid celled columns={18}  >
        <Grid.Row rows={7}>
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
      </Grid> */}
    </>
  )
}

export default ElementCard;
