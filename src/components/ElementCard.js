import React, { useState } from 'react'
import { Card, Icon, Segment, Button, Grid, Header, Modal, Image } from 'semantic-ui-react'

// CSS
//import '../app.css'

// function ElementCard({ atomicMass, atomicNumber, boilingPoint, bondingType, cpkHexColor, density, electronAffinity, electronegativity, electronicConfiguration, groupBlock, ionRadius, ionizationEnergy, meltingPoint, name: Name, oxidationStates, standardState, symbol, vanDelWaalsRadius, yearDiscovered }) {

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "73D2DE"
};

function ElementCard({ name, appearance, atomic_mass, boil, category, density, color, discovered_by, melt, molar_heat, named_by, number, period, phase, source, spectral_img, summary, symbol, xpos, ypos, shells, electron_configuration, electron_configuration_semantic, electron_affinity, electronegativity_pauling, ionization_energies, hex }) {



  // state
  const [showInfo, setShowInfo] = useState(false);
  const [open, setOpen] = useState(false)


  return (
    < >
      <div className='element'
        style={{
          gridColumn: xpos,
          gridRow: ypos,
          borderColor: colorMap[category],
          backgroundColor: colorMap[category]
        }}>

        <div className="number">{number}</div>
        {/* <div><Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <Icon name='minus' /> : <Icon name='plus' />}
        </Button></div> */}
        <div className='symbol'>{symbol}</div>
        {/* <div className='name'>{name}</div> */}

        {/* <Icon onClick={() => setShowInfo(!showInfo)} link  > {showInfo ? <Icon name='minus' /> : <Icon name='plus' />}</Icon>
        {showInfo && <span>{name}</span>} */}


        <Modal
          closeIcon
          open={open}
          trigger={<Button size='mini' basic compact icon floated='right' ><Icon rotated='clockwise' name='sort up' /></Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header size='huge' > {name} || {symbol} </Header>
          <Header>Discovered by:<i> {discovered_by}</i></Header>
          <Modal.Content>
            <Modal.Description>
              <p>{summary} </p>
              <p>Atomic Number: {number}</p>
              <p>Boiling point: {boil} and Melting Point: {melt}</p>
            </Modal.Description>
          </Modal.Content>

        </Modal>
        {/* <Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <Icon name='minus' /> : <Icon name='plus' />}
        </Button> */}
        {/* {showInfo && <Segment placeholder>
          <Card>
            <Card.Content>
              <Card.Header>{boil}</Card.Header>
              <Card.Meta>
                <span className='date'>{period}</span>
                <span className='date'>{phase}</span>
                <span className='date'>{source}</span>

              </Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
          </Card>
        </Segment>
        } */}

      </div>

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
