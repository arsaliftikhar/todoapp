var list=document.getElementById('list');

document.addEventListener("keypress",function (event) {

    var getKey = event.key;

    if (getKey==='Enter')
    {

        var todoValue=document.getElementById('todoValue');
        if (todoValue.value==='')
        {
            alert('Please enter todo value');
        }
        else
        {
            //create list and append
            var createList=document.createElement('li');
            var listText=document.createTextNode(todoValue.value);
            createList.appendChild(listText);
            list.appendChild(createList);
            todoValue.value='';
            todoValue.focus();


            //create delete button
            var createDeleteButton=document.createElement('button');
            var deleteText=document.createTextNode('Delete');
            createDeleteButton.appendChild(deleteText);
            createList.appendChild(createDeleteButton);
            createDeleteButton.setAttribute('class','listBtn');
            createDeleteButton.setAttribute('onclick','deleteValue(this)');


            //create update button
            var createUpdateButton=document.createElement('button');
            var updateText=document.createTextNode('Update');
            createUpdateButton.appendChild(updateText);
            createList.appendChild(createUpdateButton);
            createUpdateButton.setAttribute('class','listBtn');
            createUpdateButton.setAttribute('onclick','update(this)');





            console.log(createList);
        }

    }

});
function addList()
{

    var todoValue=document.getElementById('todoValue');
    if (todoValue.value==='')
    {
        alert('Please enter todo value');
    }
   else
    {
        //create list and append
        var createList=document.createElement('li');
        var listText=document.createTextNode(todoValue.value);
        createList.appendChild(listText);
        list.appendChild(createList);
        todoValue.value='';
        todoValue.focus();


        //create delete button
        var createDeleteButton=document.createElement('button');
        var deleteText=document.createTextNode('Delete');
        createDeleteButton.appendChild(deleteText);
        createList.appendChild(createDeleteButton);
        createDeleteButton.setAttribute('class','listBtn');
        createDeleteButton.setAttribute('onclick','deleteValue(this)');


        //create update button
        var createUpdateButton=document.createElement('button');
        var updateText=document.createTextNode('Update');
        createUpdateButton.appendChild(updateText);
        createList.appendChild(createUpdateButton);
        createUpdateButton.setAttribute('class','listBtn');
        createUpdateButton.setAttribute('onclick','update(this)');





        console.log(createList);
    }
}

//this is remove function
function deleteValue(e) {

    e.parentNode.remove();
}

//this is update function
function update(e) {
    var getValue=e.parentNode.childNodes[0].nodeValue;
    console.log(getValue)
    var getUpdateValue=prompt('Enter updated value',getValue);
    if (getUpdateValue==='')
    {
        alert('Please Enter Value')
    }
    else
    {
        e.parentNode.childNodes[0].nodeValue=getUpdateValue;
    }
}




// delete all values
function deleteAll() {

    document.getElementById('list').innerHTML=' ';
}