'use strict'
let form = document.getElementById('form');
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

let cars = [];
function Car(cusName, carModel){
    this.cusName = cusName;
    this.carModel = carModel;
    //car price (randomly)
    this.price = getRandomInt(1000, 10000);
    cars.push(this);
}

function saveToLocalStorage(){
let data = JSON.stringify(cars);
localStorage.setItem('car', data);
}

function readFromLocalStorage(){
    let stringObj = localStorage.getItem('car');
    let data  = JSON.parse(stringObj);

    if(data){
        for (let i = 0; i < data.length; i++) {
            new Car(data[i].cusName, data[i].carModel);
            cars[i].render();
            
        }
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


  Car.prototype.render = function(){
      let tr = document.createElement('tr');
      table.appendChild(tr);

    if(this.carModel == 'KIA'){
        let img = document.createElement('img');
        img.src = 'https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Falqudscollege-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!4kW0Mz1ymE6DvXc0RHm89r7i7SSJUsJOkA-56aojf1AKR62oXKimQaAG9ivOPT6d%2Fitems%2F01W4C7VWALLO2PUB5AJ5G3WQUL4BTYFU2L%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYWxxdWRzY29sbGVnZS1teS5zaGFyZXBvaW50LmNvbUBhMTYyYzUzMi03YTBjLTQ2NDUtOTZmZC0yMGQwMTljZjRlNWEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjMwMzg5NjAwIiwiZXhwIjoiMTYzMDQxMTIwMCIsImVuZHBvaW50dXJsIjoiQi9xc0M5cVUzVjZORCtLVm4zdTFETkhwbXo0ZFQrakI4cVl0eDJjUE1mWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik16TmlORFExWlRJdE56SXpaQzAwWlRrNExUZ3pZbVF0Tnpjek5EUTBOemxpWTJZMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzlkNTJjMzIzYTJiNTIwMzRkMTUyMzA0YmJjMDFlNTdkMjI4NTI4YjFjMDI5Yzk4NzM4MWJkM2MwNDRmNDQxZDciLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzlkNTJjMzIzYTJiNTIwMzRkMTUyMzA0YmJjMDFlNTdkMjI4NTI4YjFjMDI5Yzk4NzM4MWJkM2MwNDRmNDQxZDciLCJzaGFyaW5naWQiOiJOUFdvMXpwVVlFK21UazlKOXduNFZ3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.TmhmelVadjh1SnBOclZINGNTVHZQdnBKN2xJUEExV0pDOHViMzhyWkVPST0&cTag=%22c%3A%7BFAB45B0B-A007-4D4F-BB42-8BE06782D34B%7D%2C2%22&encodeFailures=1&width=212&height=212&srcWidth=1200&srcHeight=1200 ';
        tr.appendChild(img);
        
     }
        else if(this.carModel == 'BMW'){
           let img = document.createElement('img');
        img.src = 'https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Falqudscollege-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!4kW0Mz1ymE6DvXc0RHm89r7i7SSJUsJOkA-56aojf1AKR62oXKimQaAG9ivOPT6d%2Fitems%2F01W4C7VWG72EFSRRROPZHJFBGXCDSXFV4F%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYWxxdWRzY29sbGVnZS1teS5zaGFyZXBvaW50LmNvbUBhMTYyYzUzMi03YTBjLTQ2NDUtOTZmZC0yMGQwMTljZjRlNWEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjMwMzg5NjAwIiwiZXhwIjoiMTYzMDQxMTIwMCIsImVuZHBvaW50dXJsIjoiQi9xc0M5cVUzVjZORCtLVm4zdTFETkhwbXo0ZFQrakI4cVl0eDJjUE1mWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik16TmlORFExWlRJdE56SXpaQzAwWlRrNExUZ3pZbVF0Tnpjek5EUTBOemxpWTJZMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzlkNTJjMzIzYTJiNTIwMzRkMTUyMzA0YmJjMDFlNTdkMjI4NTI4YjFjMDI5Yzk4NzM4MWJkM2MwNDRmNDQxZDciLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzlkNTJjMzIzYTJiNTIwMzRkMTUyMzA0YmJjMDFlNTdkMjI4NTI4YjFjMDI5Yzk4NzM4MWJkM2MwNDRmNDQxZDciLCJzaGFyaW5naWQiOiJOUFdvMXpwVVlFK21UazlKOXduNFZ3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.TmhmelVadjh1SnBOclZINGNTVHZQdnBKN2xJUEExV0pDOHViMzhyWkVPST0&cTag=%22c%3A%7B280BD1DF-2EC6-4E7E-9284-D710E572D785%7D%2C2%22&encodeFailures=1&width=170&height=173&srcWidth=679&srcHeight=691';
        tr.appendChild(img);
        
       }
        else{
            let img = document.createElement('img');
            img.src = 'https://alqudscollege-my.sharepoint.com/personal/s_aleshtaiwi_ltuc_com/Documents/img/cars/ford.jpg';
             tr.appendChild(img);
          
        }
    
      let tdName = document.createElement('td');
      tr.appendChild(tdName);
      tdName.textContent = this.cusName;

      let tdCarModel = document.createElement('td');
      tr.appendChild(tdCarModel);
      tdCarModel.textContent = this.carModel;

      let tdCarPrice = document.createElement('td');
      tr.appendChild(tdCarPrice);
      tdCarPrice.textContent = this.price;
      
  }

  function createHeader(){
      let thImg = document.createElement('th');
      table.appendChild(thImg);
      thImg.textContent = 'Order Image'

      let thDetails = document.createElement('th');
      table.appendChild(thDetails);
      thDetails.textContent = 'Order Details';
  }
  createHeader();

  form.addEventListener('submit', addCar);

  function addCar(event){
    event.preventDefault();

    let cusName = event.target.cusName.value;
    let carModel = event.target.carModel.value;

    let newCar = new Car(cusName,carModel );
    newCar.render();
    saveToLocalStorage();

  }
  readFromLocalStorage();
