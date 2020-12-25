import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {InputNumber, Slider} from 'antd'

const SliderContainer = styled.div`
  display: flex;
`
const SliderInput = ({value,min=-1,max=1}) => {
    useEffect(()=>{
        setValue(value)
    },[])

    const [currentValue,setValue]=useState()
    return (
        <SliderContainer>
            <Slider
                style={{width: '100%', marginRight: 20}}
                min={min}
                max={max}
                value={currentValue}
                step={0.01}
                onChange={(e) => {
                    value=e
                    setValue(e)
                }}
            />
            <InputNumber
                min={min}
                max={max}
                value={currentValue}
                step={0.01}
                onChange={(e) => {
                    value=e
                    setValue(e)
                }}
            />
        </SliderContainer>

    )
}
export default SliderInput
