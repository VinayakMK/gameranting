import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' class="mt-5" style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ color:'white' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
          GameRanting.com
        </a>
      </div>
    </MDBFooter>
  );
}