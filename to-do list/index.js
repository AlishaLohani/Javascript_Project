function addToList()
{
   var task = document.getElementById('task').value
   var tododiv = document.getElementById('mytodo')

   var newtodoitem = document.createElement('div') 
   
     var todoname =document.createElement('li')
     todoname.innerHTML = task
     var deletebtn = document.createElement('i')
     deletebtn.classList.add('far')
     deletebtn.classList.add('fa-trash-alt')

     newtodoitem.appendChild(todoname)
     newtodoitem.appendChild(deletebtn)

     tododiv.appendChild(newtodoitem)
}


var tododiv = document.getElementById('mytodo');
tododiv.addEventListener('click', deleteItem);

function deleteItem(e) {
  const element = e.target;
  if (element.classList.contains('far')) {
    const parentElement = element.parentElement;
    if (parentElement) {
      parentElement.remove();
    }
  }
}
