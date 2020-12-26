from rating.set_functions import main_set, price_set, sale_set
from rating.rate_functions import make_rate
import pandas as pd

company_columns = ['verification',
                   'days_online',
                   'own',
                   'median_delivery_time',
                   'mean_product_price',
                   'good_orders',
                   'bad_orders',
                   'mean_feedback',
                   'mean_call',
                   'mean_cost_delivery',
                   'count_products',
                   'median_sale',
                   'sum_views',
                   'part_good_order',
                   'part_orders_of_online',
                   'part_orders_of_views',
                   'rate']
price_columns = ['mean_product_price', 'median_product_price',
                 'max_product_price', 'min_product_price']
sale_columns = ['mean_sale', 'median_sale', 'max_sale', 'min_sale']


def company_response(companies):
    d = {}
    for _id in companies['id']:
        line_d = {}
        line = companies[companies['id'] == _id]
        for column in company_columns:
            line_d[column] = list(line[column])[0]

        d[list(line['company'])[0]] = line_d
    return d


def price_response(companies):
    d = {}
    for _id in companies['id']:
        line_d = {}
        line = companies[companies['id'] == _id]
        for column in price_columns:
            line_d[column] = list(line[column])[0]

        d[list(line['company'])[0]] = line_d
    return d


def sale_response(companies):
    d = {}
    for _id in companies['id']:
        line_d = {}
        line = companies[companies['id'] == _id]
        for column in sale_columns:
            line_d[column] = list(line[column])[0]

        d[list(line['company'])[0]] = line_d
    return d

def make_price_dia(companies, products):
    d = {}
    for _id in companies['id']:
        name = list(companies[companies['id'] == _id]['company'])[0]
        d[name] = list(products[products['id_company'] == _id]['price'])
    return d

def make_sale_dia(companies, products):
    d = {}
    for _id in companies['id']:
        name = list(companies[companies['id'] == _id]['company'])[0]
        d[name] = list(products[products['id_company'] == _id]['sale'])
    return d

def make_response(category_id, dict_coef):
    df_companies = pd.read_excel('db/companies.xlsx', engine='openpyxl')
    df_companies = df_companies[df_companies['category'] == category_id]
    df_orders = pd.read_excel('db/orders.xlsx', engine='openpyxl')
    df_products = pd.read_excel('db/products.xlsx', engine='openpyxl')

    df_companies = main_set(df_companies, df_orders, df_products)
    df_companies = price_set(df_companies, df_orders, df_products)
    df_companies = sale_set(df_companies, df_orders, df_products)

    df_companies['rate'] = make_rate(df_companies, dict_coef)
    response = {'companies': company_response(df_companies),
                'prices': price_response(df_companies),
                'sales': sale_response(df_companies),
                'price_dia': make_price_dia(df_companies, df_products),
                'sale_dia': make_sale_dia(df_companies, df_products)}
    return response
