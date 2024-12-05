const taskForm = document.querySelector('.task-form');
const taskHeader = document.querySelector('.task-header');
const closeDialog = document.getElementById('close-dialog');
const openTaskForm = document.getElementById('open-form-button');
const closeTaskForm = document.getElementById('close-form-button');
const addTask = document.getElementById('add-task-button');
const discardTask = document.getElementById('discard-button');
const cancelTask = document.getElementById('cancel-button');
const taskContainer = document.getElementById('task-container');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const detailInput = document.getElementById('detail-input');
const subHeader = document.getElementById('subheader');
const themeButton = document.getElementById('theme-button');

const taskData = [];
let currentTask = {};

//Check if the task list is empty and update the subheader accordingly
function updateSubHeader () {
    if (taskData.length > 0) {
        subHeader.innerText = "Click on a task to view details."
    } else {
        subHeader.innerText = "Your list is currently empty. Use the button below to add a task."
    }
};

updateSubHeader();

//Open and close the task form
openTaskForm.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
    taskHeader.classList.toggle('hidden');
});

closeTaskForm.addEventListener('click', () => {
    closeDialog.showModal();
});

discardTask.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
    taskHeader.classList.toggle('hidden');

    //Clear the task form
    taskForm.reset();
});

cancelTask.addEventListener('click', () => {
    closeDialog.close();
});

taskForm.addEventListener('submit', (event) => {

    //Prevent page refresh when form is submitted
    event.preventDefault();

    //Check if the task already exists
    const taskArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskList = {

    //Create a unique ID for each task
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    details: detailInput.value,
}

console.log(taskList);
});
