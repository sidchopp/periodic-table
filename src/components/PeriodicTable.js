import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react';

// CSS
import '../app.css'

// components
import Loading from './Loading';
import ElementCard from './ElementCard';

const url = 'https://neelpatel05.pythonanywhere.com/'

function PeriodicTable() {
  // state
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  const fetchTable = async () => {
    // to make sure loading is true when we are fetching data
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
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
      <div><ElementCard key={elements.atomicNumber} {...elements} /></div>
    )
  })
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div >
      <h1>The Periodic Table</h1>
      <Grid columns={3} divided>
        <Grid.Column></Grid.Column>
        {mapTable}
      </Grid>
    </div>
  )
}

export default PeriodicTable;
