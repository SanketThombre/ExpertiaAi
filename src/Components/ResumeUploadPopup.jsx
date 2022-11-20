

import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { Icon } from "semantic-ui-react";

function ResumeUploadPopup() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
          trigger={<button style={{
           width: "30%",
    height:"40px",
    border: "none",
    borderRadius:"15px",
    fontSize:"15px",
    fontWeight:"600",
    backgroundColor:"#6c5ce7",
    color: "white",
    cursor: "pointer",
      }}>Apply Now</button>}
    >
          <Modal.Header>Key Account Sales Manager For Aditya Birla Capital Health
              <p style={{fontSize:"16px",color:"gray"}}>Windzardtechnologies</p>
          </Modal.Header>
          
      <Modal.Content image>
       
        <Modal.Description>
          <Header><Icon name="file pdf outline"/> Upload your Resume *</Header>
          <p style={{fontSize:"17px",color:"black"}}>
           use your file browser or just drag and drop
          </p>
         
        </Modal.Description>
      </Modal.Content>
      
          <div style={{
              width: "80%",
              height: "300px",
              border: "2px solid #5585f8",
              margin: "25px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "black",
              borderStyle: "dashed",
              borderRadius: "5px",


          }}>
              <Icon name="file pdf outline"/> Pdf,Docs,txt
          </div>
    </Modal>
  )
}

export default ResumeUploadPopup;
