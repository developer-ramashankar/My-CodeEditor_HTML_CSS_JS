import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: compilerSliceStateType = {
  fullCode: {
    html: `<!DOCTYPE html>
 <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
  </head>
    <body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Add New Task">
        <button id="addTaskBtn">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
  </body>
 </html>
    
    `,
    css: `body {
      font-family: Arial, sans-serif;
  }
  
  .container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
  }
  
  h1 {
      text-align: center;
  }
  
  input[type="text"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
  }
  
  button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }
  
  button:hover {
      background-color: #0056b3;
  }
  
  ul {
      list-style-type: none;
      padding: 0;
  }
  
  li {
      margin-bottom: 10px;
  }
  
  .deleteBtn {
      background-color: #dc3545;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
  }
  `,
    javascript: `document.addEventListener('DOMContentLoaded', function() {
      const taskInput = document.getElementById('taskInput');
      const addTaskBtn = document.getElementById('addTaskBtn');
      const taskList = document.getElementById('taskList');
  
      addTaskBtn.addEventListener('click', function() {
          const taskText = taskInput.value.trim();
          if (taskText !== '') {
              const li = document.createElement('li');
              li.textContent = taskText;
              const deleteBtn = document.createElement('button');
              deleteBtn.textContent = 'Delete';
              deleteBtn.classList.add('deleteBtn');
              deleteBtn.addEventListener('click', function() {
                  taskList.removeChild(li);
              });
              li.appendChild(deleteBtn);
              taskList.appendChild(li);
              taskInput.value = '';
          }
      });
  });
  `,
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<compilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});
export const { updateCurrentLanguage, updateCodeValue,updateFullCode } = compilerSlice.actions;
export default compilerSlice.reducer;
