import React, { useState, useEffect } from 'react'

import { Grid, Image } from 'semantic-ui-react'


// components
import Loading from './Loading';
//import ElementCard from './ElementCard';


const url = 'https://neelpatel05.pythonanywhere.com/'

function PeriodicTable() {

  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  const fetchTable = async () => {
    // to make sure loading is true when we are fetching data
    setLoading(true);

    try {
      const response = await fetch(url);
      //console.log(response);
      const data = await response.json();
      console.log(data);
      // after getting our data, we want loading to stop
      setLoading(false)
      // to show the data of tours
      setTable(data)
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
    return (
      <div>
        <h1>
          {elements.name}
        </h1>
      </div>

    )
  })
  return (
    <div>

      <Grid>
        {mapTable}
      </Grid>
      {/* {table.map((elements) => {
        return (
          <Grid key={elements.atomicNumber}>
            <Grid.Row columns={10}>
              <Grid.Column>
                <Image src='/images/wireframe/image.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
      })} */}
      {/* <ElementCard /> */}
    </div>
  )
}

export default PeriodicTable
