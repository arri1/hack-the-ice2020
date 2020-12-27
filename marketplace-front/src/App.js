import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    width: 100vw;
    height: 100%;
`
const Padding = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
`

const App = () => {
    return (
        <Container>
            <Padding>
                <img
                    src={'/images/banner.png'}
                    alt={'banner'}
                />
            </Padding>
        </Container>
    );
}

export default App;
