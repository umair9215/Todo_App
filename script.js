
function addActivity() {

    //getting values from the HTML
    const input = document.getElementById('input');
    const comingList = document.getElementById('comingList');


    //getting list from the HTML
    const li = document.createElement('li');
    li.textContent = input.value;
    li.className = 'comingListItem';

    //bounding user to input something
    if (!li.textContent.trim()){
       return showAlert();
    }

  
    //creating a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'btn remove-btn';
    

    //creating a div for holding buttons on the other side
    const div = document.createElement('div');
    div.className = 'buttons';

    //creating an edit button
    const editBtn = document.createElement('i');
    editBtn.className = 'fa-solid fa-pencil';

    //creating done button
    const doneBtn = document.createElement('i');
    doneBtn.className = 'fa-solid fa-check';
    
    //creating a save button
    let saveBtn = document.querySelector('.saveBtn');
    

    //appending the buttons to the div and div to the listItem
    comingList.appendChild(li);
    li.appendChild(div);
    div.appendChild(doneBtn);
    div.appendChild(editBtn);
    div.appendChild(removeBtn);


    //function for saving the edited changes in the listItem
    saveBtn.onclick = function() {
        let promptInput =  document.getElementById('promptInput');
        const textSpan = document.createElement('span');
        textSpan.textContent = promptInput.value;
        li.firstChild.remove();
        li.insertBefore(textSpan, div);
        document.getElementById('prompt').classList.remove('promptActive');
        document.getElementById('promptInput').value = '';
    }

    //function for editing the listItem
    editBtn.onclick = function() {
      document.getElementById('prompt').classList.add('promptActive');
    }

    //function for removing the listItem
    removeBtn.onclick = function() {
        comingList.removeChild(li);
    };

    //function for overwriting the listItem
    doneBtn.onclick = function() {
        li.classList.toggle('done');
    };

    input.value = '';
}


//function for alert to be shown
function showAlert() {
    let showAlert =  document.getElementById('alert');
    showAlert.classList.add('alertActive');
}

//function for alert to be hidden
function removeAlert() {
    let removeAlert =  document.getElementById('alert').classList.remove('alertActive');      
}

//function for hiding the prompt
function hidePrompt() {
    document.getElementById('prompt').classList.remove('promptActive');
    document.getElementById('promptInput').value = '';
   
}


