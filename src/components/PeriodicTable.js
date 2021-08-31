import React, { useState, useEffect } from 'react'
import { Grid, Header, Icon, } from 'semantic-ui-react';

// CSS
import '../app.css'

// components
import Loading from './Loading';
import ElementCard from './ElementCard';
import data from './PeriodicTableJSON.json';


const url = 'https://neelpatel05.pythonanywhere.com/'
function PeriodicTable() {
  // state
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  // Data From API
  // const fetchTable = async () => {
  //   // to make sure loading is true when we are fetching data
  //   setLoading(true);

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     //console.log(data);
  //     // after getting our data, we want loading to stop
  //     setLoading(false)
  //     // to show the data of tours
  //     setTable(data)
  //   } catch (err) {
  //     // if there is error we want to stop loading
  //     setLoading(false)
  //     console.log('This is the error:', err);
  //   }
  // }
  // useEffect(() => {
  //   fetchTable();
  // }, [])

  // const mapTable = table.map((elements) => {
  //   return (

  //     <div><ElementCard key={elements.atomicNumber} {...elements} /></div>

  //   )
  // })
  // if (loading) {
  //   return (
  //     <Loading />
  //   )
  // }
  // return (
  //   <><h1>The Periodic Table</h1>
  //     <div className='periodic-table'>{mapTable}</div></>

  // )

  // data from local PeriodicTable JSON file

  const mapTable = data.elements.map((element) => {
    return (

      <ElementCard key={element.name} {...element} />

    )
  })

  return (
    <>
      <div className='heading'>
        <Header as='h2' icon textAlign='center'>
          <a href="https://www.linkedin.com/in/sidchopp/" target="_blank"> <Icon name='table' circular /></a>
          <Header.Content>The Periodic Table</Header.Content>
        </Header>
      </div>
      <div className='periodic-table'>{mapTable}</div>
    </>

  )
}

export default PeriodicTable;
