import React, { useState, useEffect } from 'react'

import { Grid, Image, Segment, Table } from 'semantic-ui-react'

import '../app.css'

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
      <div style={{ padding: '2rem' }}>
        {/* <Grid>
          <Grid.Row columns={15}>
            <Grid.Column>
              <Segment> {elements.name}</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}

        {/* <Table celled fixed >
          <Table.Header>
            <Table.Body>
              {elements.name}
            </Table.Body>
          </Table.Header>
        </Table> */}
        <Grid columns='equal' >
          <Grid.Row columns='equal'>
            <Grid.Column>
              <p>
                <span> {elements.name}</span>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
