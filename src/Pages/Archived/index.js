import React from 'react'
import {useLocation} from 'react-router-dom';

const Archived = () => {
  const location = useLocation();
  console.log("location",location);
  const { item } = location.state;
  console.log("item",item);
  return (
    <div>Archived
     <p> {item?.title}</p>
    </div>
  )
}

export default Archived