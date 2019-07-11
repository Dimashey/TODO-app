const url = 'https://jsonplaceholder.typicode.com/todos';
let myList = document.querySelector(".list__body");
fetch(url)
    .then(response => response.json())
    .then(data => {
        let current = [];
        let done = [];
        for(let item of data) {
            if(item.userId == 2) {
                if(item.completed == true) {
                    done.push(item)
                } else if(item.completed == false) {
                    current.push(item);
                }
            }
        }
        let arrTask = [...current, ...done];
        arrTask.map(item => {
                let listItem = document.createElement('li');
                let checkBoxItem = document.createElement('div');
                let titleItem = document.createElement('span');
                titleItem.classList.add('title');
                checkBoxItem.classList.add('checkbox');
                listItem.classList.add('list__body-item');
                titleItem.innerHTML = item.title;
                listItem.appendChild(checkBoxItem);
                listItem.appendChild(titleItem);
                myList.appendChild(listItem);
                if(item.completed == true) {
                        checkBoxItem.classList.add('checkbox__done'); 
                }
                checkBoxItem.addEventListener('click', function() {
                    this.classList.toggle('checkbox__done');
                    if(checkBoxItem.classList.contains('checkbox__done')) {
                        insertAfter(checkBoxItem.parentNode, myList.lastChild);
                    }
                })  
        })
    })
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }




