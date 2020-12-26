import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {InputNumber, Slider} from 'antd'

const SliderContainer = styled.div`
  display: flex;
`
const SliderInput = ({min=-1,max=1,initialValue,setArray}) => {
    const [value,setValue]=useState(initialValue)
    return (
        <SliderContainer>
            <Slider
                style={{width:'100%',marginRight: 20}}
                min={min}
                max={max}
                value={value}
                step={0.01}
                onChange={(e) => {
                    setValue(e)
                    setArray(e)

                }}
            />
            <InputNumber
                min={min}
                max={max}
                value={value}
                step={0.01}
                onChange={(e) => {
                    setValue(e)
                    setArray(e)
                }}
            />
        </SliderContainer>

    )
}
export default SliderInput
