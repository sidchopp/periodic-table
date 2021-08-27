import React, { useState, useEffect } from 'react'

// components
import Loading from './Loading';


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
      setTable(false)
      // to show the data of tours
      setTable(data)
    } catch (err) {
      // if there is error we want to stop loading
      setLoading(false)
      console.log(err);
    }
  }
  useEffect(() => {
    fetchTable();
  }, [])
  return (
    <div>
      My Periodic Table
    </div>
  )
}

export default PeriodicTable
