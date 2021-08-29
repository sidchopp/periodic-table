import React, { useState, useEffect } from 'react'

import { Grid, Button, } from 'semantic-ui-react'

import '../app.css'

// components
import Loading from './Loading';
import ElementCard from './ElementCard';
import TableList from './TableList';


const url = 'https://neelpatel05.pythonanywhere.com/'

function PeriodicTable() {

  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);
  const [cardDetails, setCardDeatils] = useState([])

  // to display a card when a button is clicked

  const showCard = (atomicNumber) => {
    const cardDetails = table.filter((elementSelect) => elementSelect.atomicNumber === atomicNumber)
    // console.log(atomicNumber)
    setCardDeatils(cardDetails)

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

  if (loading) {
    return (
      <Loading />
    )
  }

  return <TableList elementsProps={table} showElement={showCard} />
}

export default PeriodicTable;
