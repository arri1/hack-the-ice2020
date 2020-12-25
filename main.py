
from make_response import make_response

# данные через api
d_koeff = {'verification': 1.5,
           'part_orders_of_online': 1.0,
           'own': 1.1,
           'median_delivery_time': -1.0,
           'mean_product_price': -1.0,
           'part_good_order': 1.0,
           'mean_feedback': 1.0,
           'mean_call': 1.0,
           'mean_cost_delivery': -1.0,
           'count_products': 1.0,
           'median_sale': 1.0,
           'part_orders_of_views': 1.0}  # сюда должны помещаться коэффициенты
category_id = 2  # здесь id категории

response = make_response(category_id, d_koeff)

# import json
# with open("validation.json", "w", encoding="utf-8") as file:
#     json.dump(response, file)

