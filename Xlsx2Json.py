import xlrd
import os
import json
import time


curPath = os.path.abspath('.')
data = xlrd.open_workbook(os.path.join(curPath, "test.xlsx"))

table = data.sheets()[0]
rows = table.nrows

content = []

for i in range(rows):
    if i>0:
        item_data = table.row_values(i)
        item_content = []
        for x in item_data:
            item_content.append(x)
        content.append(item_content)


def createJson(content):
    jsonData = {}
    for item_data in content:
        jsonData[item_data[0]] = {}
        jsonData[item_data[0]]['name'] = item_data[0]
        jsonData[item_data[0]]['description'] = item_data[1]
        jsonData[item_data[0]]['field1'] = item_data[2]
        jsonData[item_data[0]]['field2'] = item_data[3]
    return jsonData


def store(jsonStr):
    timeStrap = time.strftime("%a%b%d_%H_%M_%S_%Y", time.localtime());    # time strap
    name ="test_" + timeStrap + ".json";
    with open(name, 'w') as json_file:
        json.dump(jsonStr, json_file)


jsonData = createJson(content)
store(jsonData)
jsonString = json.dumps(jsonData)
print(jsonString)