import React from 'react'

import { Grid, Button, } from 'semantic-ui-react'

import ElementCard from './ElementCard';

import '../app.css'
function TableList({ elementsProps, showElement }) {
  const mapTable = elementsProps.map((elements) => {
    // const { atomicMass, atomicNumber, boilingPoint, bondingType, cpkHexColor, density, electronAffinity, electronegativity, electronicConfiguration, groupBlock, ionRadius, ionizationEnergy, meltingPoint, name: Name, oxidationStates, standardState, symbol, vanDelWaalsRadius, yearDiscovered } = elements;
    return (
      <div key={elements.atomicNumber} {...elements} details={showElement}>
        <Grid celled columns='equal'  >
          <Grid.Row columns='equal'>
            <Grid.Column>
              <p>
                <span>Name: {elements.Name}</span>
                <span> ({elements.groupBlock})</span>
                <span> Atomic Number:{elements.atomicNumber}</span>
                <span>Symbol: {elements.symbol}</span>
                <div >
                  <Button key={elements.atomicNumber} fluid compact onClick={() => showElement}>More</Button>
                </div>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  })

  return (
    <div style={{ padding: '0.5rem' }}>
      <Grid celled >
        {mapTable}
      </Grid>
      <ElementCard details={showElement} />
    </div>
  )


}

export default TableList
