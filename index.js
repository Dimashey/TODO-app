
const url = 'https://jsonplaceholder.typicode.com/todos';

// let arr1 = [];
// let arr2 = [];
// let obj = {}; 
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         for(let item in data){
//             if(data[item].userId == 2 && data[item].completed == true){
//                 arr1.push(data[item]);
//             } else if(data[item].userId == 2 && data[item].completed == false){
//                 arr2.push(data[item]);
//             }            
//         }
//     })
// obj.finished = arr1;
// obj.unfinished = arr2;
// console.log(obj.finished);


let myList = document.querySelector(".list__body");
fetch(url)
    .then(response => response.json())
    .then(data => {

        let current = [];
        let done = [];

        for(let item in data) {
            if(data[item].userId == 2) {
                if(data[item].completed == true) {
                    done.push(data[item])
                } else if(data[item].completed == false) {
                    current.push(data[item]);
                }
            }
        }
        let arrTask = [...current, ...done];
        console.log(arrTask);
        for(let item of arrTask){

                let taskItem = document.createElement('li');
                let checkBoxTask = document.createElement('div');
                let titleTask = document.createElement('span');
                titleTask.classList.add('title')
                checkBoxTask.classList.add('checkbox');
                taskItem.classList.add('list__body-item');
                titleTask.innerHTML = item.title;
                taskItem.appendChild(checkBoxTask);
                taskItem.appendChild(titleTask);
                myList.appendChild(taskItem);
                switch(item.completed) {
                    case true:
                        checkBoxTask.classList.add('checkbox__done'); 
                }
                checkBoxTask.addEventListener('click', function() {
                    this.classList.toggle('checkbox__done');
                })  
                
                if(checkBoxTask.classList.contains('checkbox__done')) {
                        insertAfter(checkBoxTask.parentNode, myList.lastChild);
                    }
        }
    })
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }




