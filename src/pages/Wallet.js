import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

function Wallet(props){
  console.log(props.email);
  return (
    <div>
      <Header />
      <Form />
      <Table />
    </div>
  )
} 
const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);