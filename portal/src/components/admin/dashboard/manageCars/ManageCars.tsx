"use client";
import { Button, Container } from '@mui/material';
import React from 'react'
import "./ManageCars.css";
import ManageCarTable from './ManageCarTable';

const ManageCars = () => {
  return (
    <section className='manageCars'>
      <Container maxWidth="lg">
      <div className="manageTop">
        <div className="managetopHead">
            <h1>Manage Cars</h1>
            <Button variant='contained' size='small' className='createCarBtn'>Create New Car</Button>
        </div>
      </div>
      <div className="manageCarsTable">
        <ManageCarTable />
      </div>
      </Container>
    </section>
  )
}

export default ManageCars
