import React from 'react'
import styled from 'styled-components'
import {InputNumber, Slider} from 'antd'

const SliderContainer = styled.div`
  display: flex;
`
const SliderInput = ({value, setValue}) => {
    return (
        <SliderContainer>
            <Slider
                style={{width: '100%', marginRight: 10}}
                min={0}
                max={2}
                value={value}
                step={0.01}
                onChange={(e) => setValue(e)}
            />
            <InputNumber
                min={0}
                max={2}
                value={value}
                step={0.01}
                onChange={(e) => setValue(e)}
            />
        </SliderContainer>

    )
}
export default SliderInput
