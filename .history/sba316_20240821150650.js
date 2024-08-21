document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('task-list').appendChild(li);

        taskInput.value = '';
    }
});

let myWindow;

function newWindow () {
    mywindow =window.open(
        "https://zty.pe/",
        "gams",
        "Width=750, height=400, resizeable=yes, scrollbars=yes, location=yes",

    );
    myWindow.focus();

    function closeWindow() {

        
    }

}
