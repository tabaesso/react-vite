import React from 'react';
import { Link } from 'react-router-dom';

const page1 = () => {
  return (
    <div>
      page1
      <br/>
      <Link to="/page2">Go to page 2</Link>
    </div>
  )
}

export default page1;