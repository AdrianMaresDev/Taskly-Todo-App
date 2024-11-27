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

const taskData = [];
let currentTask = {};

openTaskForm.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
    taskHeader.classList.toggle('hidden');
});

closeTaskForm.addEventListener('click', () => {
    closeDialog.showModal();
})