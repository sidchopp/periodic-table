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

  // // to display a card when a button is clicked

  // const showCard = (atomicNumber) => {
  //   // console.log(atomicNumber)
  //   setCardDeatils(true)

  // }

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
    return (
      <ElementCard key={elements.atomicNumber} {...elements} />
    )
  })

  if (loading) {
    return (
      <Loading />
    )
  }
  // if (cardDetails) {
  //   return (
  //     <ElementCard props={table} />
  //   )
  // }
  return (
    <div >
      <h1>Hi</h1>

      {mapTable}

    </div>
  )
}

export default PeriodicTable
