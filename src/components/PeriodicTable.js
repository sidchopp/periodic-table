import React, { useState, useEffect } from 'react'

import { Grid, Button, } from 'semantic-ui-react'

import '../app.css'

// components
import Loading from './Loading';
import ElementCard from './ElementCard';


const url = 'https://neelpatel05.pythonanywhere.com/'

function PeriodicTable() {

  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);
  const [cardDetails, setCardDeatils] = useState(false)

  // to display a card when a button is clicked

  const showCard = (atomicNumber) => {
    // console.log(atomicNumber)
    setCardDeatils(true)

  }

  const fetchTable = async () => {
    // to make sure loading is true when we are fetching data
    setLoading(true);

    try {
      const response = await fetch(url);
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      // after getting our data, we want loading to stop
      setLoading(false)
      // to show the data of tours
      setTable(data)
      // console.log(data.length);
      // console.log(table.length);
    } catch (err) {
      // if there is error we want to stop loading
      setLoading(false)
      console.log('This is the error:', err);
    }
  }
  useEffect(() => {
    fetchTable();
  }, [])

  const mapTable = table.map((elements) => {
    const { atomicMass, atomicNumber, boilingPoint, bondingType, cpkHexColor, density, electronAffinity, electronegativity, electronicConfiguration, groupBlock, ionRadius, ionizationEnergy, meltingPoint, name, oxidationStates, standardState, symbol, vanDelWaalsRadius, yearDiscovered } = elements;
    return (
      <div >
        <Grid celled columns='equal'  >
          <Grid.Row columns='equal'>
            <Grid.Column>
              <p>
                <span>Name: {name}</span>
                <span> ({groupBlock})</span>
                <span> Atomic Number:{atomicNumber}</span>
                <span>Symbol: {symbol}</span>
                <div >
                  <Button fluid compact onClick={() => showCard()}>More</Button>
                </div>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  })


  if (loading) {
    return (
      <Loading />
    )
  }
  if (cardDetails) {
    return (
      <ElementCard props={fetchTable} />
    )
  }
  return (
    <div style={{ padding: '0.5rem' }}>
      <Grid celled >
        {mapTable}
      </Grid>
    </div>
  )
}

export default PeriodicTable
