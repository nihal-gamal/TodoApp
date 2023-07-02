import React from 'react'
import {useLocation} from 'react-router-dom';

const Archived = () => {
  const location = useLocation();
  console.log("location",location);
  const { item } = location.state;
  console.log("item",item);
  return (
    <div>Archived
     {location.state? <p> {item?.title}</p>:<p>hello</p>}
    </div>
  )
}

export default Archived