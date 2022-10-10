import React from 'react';
import { YouTube, Facebook, LinkedIn, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <div className='container footer mt-5 d-flex justify-content-between py-5'>
          <div className='d-flex h4'>
              <div className='copy-right me-4'>
                 
              </div>
              <span>Tech Women Factory 2022</span>
          </div>
          <div className='d-flex justify-content-between icons'>
              <div className='facebook mx-2'>
                  <Facebook/>
              </div>
              <div className='twitter mx-2'>
                 <Twitter/>
              </div>
              <div className='youtube mx-2'>
                <YouTube/>
              </div>
              
          </div>
    </div>
  )
}

export default Footer