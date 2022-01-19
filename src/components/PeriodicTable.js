
// components
import ElementCard from './ElementCard';
import data from './PeriodicTableJSON.json';

// CSS
import '../app.css'


function PeriodicTable() {
  const mapTable = data.elements.map((element) => {
    return (
      <ElementCard key={element.name} {...element} />
    )
  })
  return <div className='periodic-table'>{mapTable}</div>
}

export default PeriodicTable;
