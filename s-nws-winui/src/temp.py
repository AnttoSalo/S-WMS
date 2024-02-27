import json
from datetime import datetime, timedelta
import random

def load_item_names():
    with open("c:\Dev\S-WMS\S-WMS\s-nws-winui\src/mockdata.json", "r") as json_file:
        data = json.load(json_file)
        return set(item["item"] for item in data["warehouseBalances"])

def generate_consumption_data(item_names):
    consumption_data = []
    today = datetime.now().date()

    for _ in range(500):
        item = random.choice(list(item_names))
        date = today - timedelta(days=random.randint(1, 10))
        consumed_quantity = random.randint(1, 20)

        entry = {
            "item": item,
            "date": date.strftime("%Y-%m-%d"),
            "consumedQuantity": consumed_quantity
        }

        consumption_data.append(entry)

    return consumption_data

if __name__ == "__main__":
    item_names = load_item_names()
    consumption_history = generate_consumption_data(item_names)

    with open("consumption_data.json", "w") as json_file:
        json.dump({"consumptionHistory": consumption_history}, json_file, indent=2)

    print("Consumption data generated and saved to 'consumption_data.json'")
