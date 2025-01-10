
import React from 'react'
import { Button, ButtonGroup, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { decrement, increment } from './counterReducer'

export default function ContactPage() {
  const data = useSelector((state: RootState) => state.counter.data)
  const dispatch = useDispatch()

  console.log("Data :",data)
  return (
    <>
    <Typography variant='h2'>Contact Page</Typography>
    <Typography variant='body1'>The data is : {data}</Typography>
    <ButtonGroup>
      <Button onClick={() => dispatch(increment(1))} color='secondary'>+</Button>
      <Button onClick={() => dispatch(decrement(1))} color='error'>-</Button>
    </ButtonGroup>
    </>
  )
}
