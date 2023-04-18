const taskContainer = document.querySelector(".task__container");
const globalStore = []; //array of objects
console.log(taskContainer);

const generateNewCard = (taskobj) => `
    <div class="col-sm-12 col-md-6 col-lg-4" id="${taskobj.id}">
              <div class="card">
                <div class="card-header d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-success mr-1"><i class="fa-solid fa-pencil"></i></button>
                  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="card-body">
                  <img class="card-img-top" src="${taskobj.imageUrl}" alt="Card image cap">
                  <h5 class="card-title mt-3 font-weight-bold text-primary">${taskobj.taskTitle}</h5>
                  <p class="card-text">${taskobj.taskDescription}</p>
                  <a href="#" class="btn btn-primary">${taskobj.taskType}k</a>
                </div>
              </div>
            </div>
    `;

const loadInitialCardData = () => {
  //local storage to get card data
  const getCardData = localStorage.getItem("tasky");

  //convert to normal obj
  const {cards} = JSON.parse(getCardData);       //parse is reverse method of stringify
  
  //loop over those array of task obj to create html card...inject it to DOM
    cards.map((cardObject) => {
      taskContainer.insertAdjacentHTML("beforeend" , generateNewCard(cardObject));

      //update globalstore
      globalStore.push(cardObject);
}
)

};

const saveChanges = () => {
    const taskobj = {
        id : `${Date.now()}`,
        imageUrl : document.getElementById("imageurl").value,
        taskTitle : document.getElementById("tasktitle").value,
        taskType : document.getElementById("tasktype").value,
        taskDescription : document.getElementById("taskdescription").value
    };

  

taskContainer.insertAdjacentHTML("beforeend" , generateNewCard(taskobj));

globalStore.push(taskobj);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));


};