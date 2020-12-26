import 'antd/dist/antd.css'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Button, Form, message} from 'antd'
import axios from 'axios'
import SliderInput from './components/sliderInput'

const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 100%;
`
const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  width: 100%;
  @media screen and (max-width: 800px){
    padding: 15px;
  }
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`

/*
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
*/

const App = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://hack-the-ice2020-python-back.herokuapp.com/api/settings/')
            .then(({data}) => {
                setLoading(false)
                console.log(data)
                setData(data)
            }).catch((e) => {
            message.error('Что то пошло не так при загрузке данных')
        })
    }, [])

    const onFinish = (args) => {
        //setLoading(true)
        console.log(args)
   /*     axios.put('https://hack-the-ice2020-python-back.herokuapp.com/api/settings/', {body: args}, {})
            .then(() => {
                setLoading(false)
                message.success('изменено!')
            })
            .catch((e) => {
                setLoading(false)
                message.error('что то пошло не так')
            })*/
    }

    return (
        <Container>
            <Padding>
                <Title>Настройки</Title>
                {!loading && data ?
                    <Form
                        style={{marginTop: 20, display: 'flex', flexDirection: 'column'}}
                        layout={'vertical'}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                            label={'verification'}
                            style={{display: 'flex', flexDirection: 'column'}}
                            name={'verification'}

                        >
                            <SliderInput
                                value={data.verification}
                                max={2}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'part_orders_of_online'}
                            name={'part_orders_of_online'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.part_orders_of_online : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'own'}
                            name={'own'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.own : 0}
                                max={2}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'median_delivery_time'}
                            name={'median_delivery_time'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.median_delivery_time : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_product_price'}
                            name={'mean_product_price'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.mean_product_price : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'part_good_order'}
                            name={'part_good_order'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.mean_product_price : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_feedback'}
                            name={'mean_feedback'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.mean_feedback : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_call'}
                            name={'mean_call'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.mean_call : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_cost_delivery'}
                            name={'mean_cost_delivery'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.mean_cost_delivery : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'count_products'}
                            name={'count_products'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.count_products : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'median_sale'}
                            name={'median_sale'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.median_sale : 0}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'part_orders_of_views'}
                            name={'part_orders_of_views'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data ? data.part_orders_of_views : 0}
                            />
                        </Form.Item>
                        <Button
                            style={{marginTop: 20}}
                            type={'primary'}
                            htmlType={'submit'}
                            loading={loading}
                        >
                            Сохранить
                        </Button>
                    </Form>
                    : null
                }
            </Padding>
        </Container>
    );
}

export default App;
