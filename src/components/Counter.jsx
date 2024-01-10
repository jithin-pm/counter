import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/counterSlice';
import {decrement} from '../redux/counterSlice'
import { reset } from '../redux/counterSlice';

function Counter() {
  const [range, setRange] = useState(1)
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.value)
  console.log('==range===',range);

  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-2 flex-column'>
        <h1 style={{fontSize:"70px", color:"black"}}>{count}</h1>
        <div>
            <button className='btn btn-danger p-3 ms-2' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            <button className='btn btn-success p-3 ms-2' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
            <button className='btn btn-primary p-3 ms-2' onClick={()=>dispatch(reset())}style={{width:"120px"}}>Reset</button>
        </div>
        <div>
          <input type="text" className='form-control w-100 mt-5' placeholder='please enter the range' style={{border:"blue"}} 
          onChange={(e)=>setRange(e.target.value)}/>
        </div>
    </div>
  )
}

export default Counter
