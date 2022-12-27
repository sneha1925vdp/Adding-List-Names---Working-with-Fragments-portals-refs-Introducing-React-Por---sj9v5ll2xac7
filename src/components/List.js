import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
    
    <>
      <ul>
        {listx.map((list  => <ListItems valuex ={list}/>))}
      </ul>
    </>
    
  
  )
}

export default List;
