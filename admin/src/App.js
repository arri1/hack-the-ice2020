import 'antd/dist/antd.css'
import React from 'react'
import styled from 'styled-components'
import {Button, Form, message} from 'antd'
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



const data = {
    verification: 1.5,
    part_orders_of_online: 1.0,
    own: 1.1,
    median_delivery_time: -1.0,
    mean_product_price: -1.0,
    part_good_order: 1.0,
    mean_feedback: 1.0,
    mean_call: 1.0,
    mean_cost_delivery: -1.0,
    count_products: 1.0,
    median_sale: 1.0,
    part_orders_of_views: 1.0,
}

const App = () => {

    const onFinish = ()=>{
        message.error('Бэк еще не готов!')
    }

    return (
        <Container>
            <Title>Настройки</Title>
            <Form
                style={{marginTop: 20}}
                layout={'vertical'}
                onFinish={onFinish}
            >
                <Form.Item
                    label={'verification'}
                    name={'verification'}
                    initialValue={data ? data.verification : 0}
                >
                    <SliderInput
                        max={2}
                    />
                </Form.Item>
                <Form.Item
                    label={'part_orders_of_online'}
                    name={'part_orders_of_online'}
                    initialValue={data ? data.part_orders_of_online : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'own'}
                    name={'own'}
                    initialValue={data ? data.own : 0}
                >
                    <SliderInput
                        max={2}
                    />
                </Form.Item>
                <Form.Item
                    label={'median_delivery_time'}
                    name={'median_delivery_time'}
                    initialValue={data ? data.median_delivery_time : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'mean_product_price'}
                    name={'mean_product_price'}
                    initialValue={data ? data.mean_product_price : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'part_good_order'}
                    name={'part_good_order'}
                    initialValue={data ? data.mean_product_price : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'mean_feedback'}
                    name={'mean_feedback'}
                    initialValue={data ? data.mean_feedback : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'mean_call'}
                    name={'mean_call'}
                    initialValue={data ? data.mean_call : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'mean_cost_delivery'}
                    name={'mean_cost_delivery'}
                    initialValue={data ? data.mean_cost_delivery : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'count_products'}
                    name={'count_products'}
                    initialValue={data ? data.count_products : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'median_sale'}
                    name={'median_sale'}
                    initialValue={data ? data.median_sale : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Form.Item
                    label={'part_orders_of_views'}
                    name={'part_orders_of_views'}
                    initialValue={data ? data.part_orders_of_views : 0}
                >
                    <SliderInput
                    />
                </Form.Item>
                <Button
                    style={{marginTop:20}}
                    type={'primary'}
                    htmlType={'submit'}
                >
                    Сохранить
                </Button>
            </Form>
        </Container>
    );
}

export default App;
