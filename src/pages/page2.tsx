import React from 'react';
import { Link } from 'react-router-dom';

const page2 = () => {
  return (
    <div>
      page2
      <br/>
      <Link to="/">Go to page 1</Link>
    </div>
  )
}

export default page2;