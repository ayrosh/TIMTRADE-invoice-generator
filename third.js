const tBody = document.getElementById("table-body");

//============================Add single row====================================
document.getElementById("add-row").addEventListener('click',function(){

    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product"></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    
    document.getElementById("add-row").addEventListener("click", (e)=> {
        e.preventDefault();
        addNewRow();
    });
});   




//GET INPUTS, MULTIPLY AND GET THE ITEM PRICE
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        amount = unit * price;
        currentRow.querySelector("#amount").value = amount;
        overallSum();

    })
};

//Get the overall sum/Total
overallSum =()=> {
    var arr = document.getElementsByName("amount");
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].value) {
            total += +arr[i].value;
        }
        document.getElementById("total").value = total +" " +"/=";
    }
}

//Delete row from the table
tBody.addEventListener("click", (e)=>{
    let el = e.target;
    const deleteROW = e.target.getAttribute("action");
    if(deleteROW == "delete") {
        delRow(el);
        overallSum();
    }
})

//Target row and remove from DOM;
delRow =(el)=> {
    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}


//===========================button1====================================================
document.getElementById('button1').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(2x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button2====================================================
document.getElementById('button2').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(2x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button3====================================================
document.getElementById('button3').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(3x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button4====================================================
document.getElementById('button4').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(4x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button5====================================================
document.getElementById('button5').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(6x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                                              <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button6====================================================
document.getElementById('button6').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(6x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button7====================================================
document.getElementById('button7').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(8x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});


//===========================button8====================================================
document.getElementById('button8').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(8x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button9====================================================
document.getElementById('button9').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-Pine(10x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button10====================================================
document.getElementById('button10').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(2x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button11====================================================
document.getElementById('button11').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(2x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button12====================================================
document.getElementById('button12').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(3x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button13====================================================
document.getElementById('button13').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(4x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button14====================================================
document.getElementById('button14').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(6x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button15====================================================
document.getElementById('button15').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(6x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button16====================================================
document.getElementById('button16').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(8x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});


//===========================button17====================================================
document.getElementById('button17').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(8x2)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================button18====================================================
document.getElementById('button18').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="std-cyp(10x1)" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Quadrant====================================================
document.getElementById('button19').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Quadrant" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Archtreave/Coverulding====================================================
document.getElementById('button20').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Archtreave" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Cornice====================================================
document.getElementById('button21').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Cornice 3x1" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});


//===========================T.N.G / Cornice 4x1====================================================
document.getElementById('button22').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Cornice 4x1" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Props====================================================
document.getElementById('button23').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Props" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Jumbo rolls====================================================
document.getElementById('button24').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Jumbo Rolls" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================10pack====================================================
document.getElementById('button25').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="10 pack" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================40pack====================================================
document.getElementById('button26').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="40 pack" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Embossed 5A====================================================
document.getElementById('button27').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Embossed 5A" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Melamine====================================================
document.getElementById('button28').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Melamine" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//===========================Ordinary flash door====================================================
document.getElementById('button29').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="flash door" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//=========================== Batten door====================================================
document.getElementById('button30').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="Batten door" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//=========================== T-door====================================================
document.getElementById('button31').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="T-door" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});
//=========================== Joint-door====================================================
document.getElementById('button32').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="joint-door" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//=========================== 4x2 door frames pine====================================================
document.getElementById('button33').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="4x2door frames" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});

//=========================== 4x2 door frames cypress====================================================
document.getElementById('button34').addEventListener('click',function(){
    addNewRow =()=> {
        const row = document.createElement("tr");
        row.className = "single-row";
        row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product" value="4x2door frames" ></td>
                        <td><input type="number" placeholder="ft/pcs" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                        <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                        <td style="text-align: right; cursor="pointer" "><span class="material-icons" action="delete">delete</span></td>`
    
        tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    }
    

        addNewRow();
    
});