import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
    
    <>
      <ul>
        {listx.map((list  => <li><ListItems valuex ={list}/></li>))}
      </ul>
    </>
    
  
  )
}

export default List;
