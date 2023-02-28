import React from 'react'
import Questions from './Questions';

const InterwiewAccord = (props) => {
const {data}=props;
console.log('data',data)
  return (
    <div className='row'>
        {
        data.map(item=><Questions key={item.id} {...item}/>
        )}
    </div>
  )
}

export default InterwiewAccord