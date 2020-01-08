import Home from "../../module/home/Home";
import Orders from "../../module/orders/Orders";

export const HEADER_CONFIG = {
    "product_family": "Client Technology",
    "product_name": "<Product Name>",
    "product_logo": "",
    "tabs": [
        {
            "path" : "/",
            "exact": true,
            "title": "Home",
            "component": Home,
            "type": "public"
        },
        {
            "path" : "/orders",
            "exact": true,
            "title": "Orders",
            "component": Orders,
            "type": "public"
        }
    ]
}