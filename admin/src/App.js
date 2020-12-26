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

    const onFinish = () => {
        setLoading(true)
        axios.put('https://hack-the-ice2020-python-back.herokuapp.com/api/settings/',  data, {})
            .then(() => {
                setLoading(false)
                message.success('изменено!')
            })
            .catch((e) => {
                setLoading(false)
                message.error('что то пошло не так')
            })
    }

    return (
        <Container>
            <Padding>
                <Title>Настройки</Title>
                { data ?
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
                                initialValue={data.verification}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.verification = e
                                    setData(newData)
                                }}
                                max={2}
                                min={-2}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'part_orders_of_online'}
                            name={'part_orders_of_online'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.part_orders_of_online}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.part_orders_of_online = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'own'}
                            name={'own'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.own}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.own = e
                                    setData(newData)
                                }}
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
                                initialValue={data.median_delivery_time}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.median_delivery_time = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_product_price'}
                            name={'mean_product_price'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.mean_product_price}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.mean_product_price = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'part_good_order'}
                            name={'part_good_order'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.mean_product_price}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.mean_product_price = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_feedback'}
                            name={'mean_feedback'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.mean_feedback}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.mean_feedback = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'mean_call'}
                            name={'mean_call'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.mean_call}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.mean_call = e
                                    setData(newData)
                                }}
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
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.mean_cost_delivery = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'count_products'}
                            name={'count_products'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.count_products}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.count_products = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'median_sale'}
                            name={'median_sale'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                initialValue={data.median_sale}
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.median_sale = e
                                    setData(newData)
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'part_orders_of_views'}
                            name={'part_orders_of_views'}
                            validateStatus={loading ? 'validating' : null}
                            hasFeedback
                        >
                            <SliderInput
                                setArray={(e) => {
                                    const newData = {...data}
                                    newData.part_orders_of_views = e
                                    setData(newData)
                                }}
                                initialValue={data.part_orders_of_views}
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
