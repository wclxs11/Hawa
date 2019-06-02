    var getUrl = "http://127.0.0.1:8080/get_task/";
    var postUrl = "http://127.0.0.1:8080/add_task/";
    var loadExcelUrl = "http://127.0.0.1:8080/load_excel/";
    var saveExcelUrl = "http://127.0.0.1:8080/save_excel/";

    var idInput = document.querySelector(".id-input");
    var infoOutput = document.querySelector(".info-output");
    var loadButton = document.querySelector(".loadButton");
    var saveButton = document.querySelector(".saveButton");
    var loadExcelButton = document.querySelector(".loadExcelButton");
    var saveExcelButton = document.querySelector(".saveExcelButton");

    //initial data binding
    var task0 = {
                id: 0,
                info: 'transferred from local var, info 0'
    };
    json0 = {};

    var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), {sheetCount: 1});
    //initialize SpreadSheet instance
    window.onload = function() {refreshSpread(spread,task0);};

    function refreshSpread(spread,task){
        var sheet = spread.getSheet(0);
        var source = new GC.Spread.Sheets.Bindings.CellBindingSource(task);

	    sheet.getCell(1, 0).text("项目");
        sheet.getCell(1, 1).text("信息");
        sheet.setBindingPath(2, 0, 'id');
        sheet.setBindingPath(2, 1, 'info');
        sheet.setDataSource(source);
    };


    function refreshSpreadforExcel(spread,jsonObj){
        console.log(jsonObj);

        var sheet2 = spread2.getSheet(0);
        var source = new GC.Spread.Sheets.Bindings.CellBindingSource(jsonObj);

        sheet.getCell(0, 0).text("name");
        sheet.getCell(0, 1).text("description");
        sheet.getCell(0, 2).text("field1");
        sheet.getCell(0, 3).text("field2");

        sheet.setBindingPath(1, 0, 'name');
        sheet.setBindingPath(1, 1, 'description');
        sheet.setBindingPath(1, 2, 'field1');
        sheet.setBindingPath(1, 3, 'field2');
        sheet.setDataSource(source);
    };


    function getInfoData() {

        var url = getUrl + '?id=' + idInput.value
        axios.get(url)
        .then(function (response) {
            task0 = response.data;
            console.log(task0);
            refreshSpread(spread,task0);
        })
        .catch(function (error) {
            infoOutput.innerHTML = "(An error has occurred.)";
        });
    }

    function postInfoData() {
        var sheet2 = spread.getSheet(0);
        var id2 = sheet2.getValue(2, 0);
        var info2 = sheet2.getValue(2, 1);
        var task2 = {"id": id2, "info": info2};
        console.log(task2);
       axios({
          method: 'post',
          url: postUrl,
          data: task2
        }).then(function (response) {
　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
    })
    .catch(function (error) {
　　  alert(error);
    })
        refreshSpread(spread,task0);
    }


    function loadExcelAPI() {
        axios.get(loadExcelUrl)
        .then(function (response) {
            json0 = response.data;
            refreshSpreadforExcel(spread,json0);
        })
        .catch(function (error) {
            infoOutput.innerHTML = "Load Excel failed";
        });
    }


    function saveExcelAPI() {
        var json = spread.toJSON({includeBindingSource: true});
        var excelIo = new GC.Spread.Excel.IO();
        axios.post(loadExcelUrl)
        .then(function (response) {
            //TBD
        })
        .catch(function (error) {
            infoOutput.innerHTML = "(An error has occurred.)";
        });
    }


    loadButton.addEventListener("click", getInfoData);
    saveButton.addEventListener("click", postInfoData);
    loadExcelButton.addEventListener("click", loadExcelAPI);
    saveExcelButton.addEventListener("click", saveExcelAPI);