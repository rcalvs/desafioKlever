import React from 'react';
import { connect } from 'react-redux';

function Header(props){
    
  return (
    <header>
      <p> {`email: ${props.email}`}
      </p>
      <p>BRL</p>
    </header>
  )
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Header);