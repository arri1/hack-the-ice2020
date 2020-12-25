import 'antd/dist/antd.css'
import React,{useState} from 'react'
import styled from 'styled-components'
import {Form} from 'antd'
import SliderInput from './components/sliderInput'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  @media screen and (max-width: 800px){
    padding: 15px;
  }
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`

/*
verification: 1.5,
part_orders_of_online: 1.0,
own: 1.1,
median_delivery_time: -1.0,
mean_product_price: -1.0,
part_good_order: 1.0
mean_feedback: 1.0,
mean_call: 1.0,
mean_cost_delivery: -1.0,
count_products: 1.0,
median_sale: 1.0,
part_orders_of_views: 1.0,
 */
const App = () => {
    const [verification, setVerification] = useState(1.5)

    return (
        <Container>
            <Title>Настройки</Title>
            <Form
                style={{marginTop: 20}}
                layout={'vertical'}
            >
                <Form.Item
                    label={'verification'}
                >
                    <SliderInput
                        value={verification}
                        setValue={setVerification}
                    />
                </Form.Item>
            </Form>

        </Container>
    );
}

export default App;
