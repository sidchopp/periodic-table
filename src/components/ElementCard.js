import React, { useState } from 'react'
import { Card, Icon, Segment, Button, Grid, Header, Modal, Image } from 'semantic-ui-react'

// CSS
import '../app.css'

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "73D2DE"
};

function ElementCard({ name, appearance, atomic_mass, boil, category, density, color, discovered_by, melt, molar_heat, named_by, number, period, phase, source, spectral_img, img, summary, symbol, xpos, ypos, shells, electron_configuration, electron_configuration_semantic, electron_affinity, electronegativity_pauling, ionization_energies, hex }) {

  // state
  const [showInfo, setShowInfo] = useState(false);
  const [open, setOpen] = useState(false)

  return (
    < >
      <div className='element'
        style={{
          gridColumn: xpos,
          gridRow: ypos,
          borderColor: colorMap[category],
          backgroundColor: colorMap[category],
        }}>
        <div className="number">{number}</div>
        {/* <div className='symbol'>{symbol}</div> */}
        <Modal
          closeIcon
          // open={open}
          trigger={<div className='symbol'><Icon link name={symbol} >{symbol}</Icon></div>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header size='huge' ><div style={{ color: 'blue', fontSize: '60px', margin: '5px' }}>{symbol}</div>  <div style={{ fontSize: '30px', margin: '7px' }}>{name}</div></Header>
          <Modal.Content image>
            <Image size='large' src={img} wrapped />
            <Modal.Description>
              <div> <Icon name='angle double right'></Icon>  Discovered by:<i> {discovered_by}</i></div>
              <div> <Icon name='angle double right'></Icon>  About: {summary}</div>

              <div> <Icon name='angle double right'></Icon>  Atomic Number: {number}</div>
              <div> <Icon name='angle double right'></Icon>  Appearance: {appearance}</div>
              <div> <Icon name='angle double right'></Icon>  Phase: {phase}</div>
              <div> <Icon name='chevron circle right'></Icon>   <a href={source} target='_blank'  >More</a></div>


            </Modal.Description>


          </Modal.Content>
        </Modal>
      </div>

    </>
  )
}

export default ElementCard;
