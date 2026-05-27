// toDo 管理とフォームハンドラ


//HTML読み込み後実行
document.addEventListener('DOMContentLoaded', () => {
    const sample_toDoList = [
        { id: 1, title: "買い物", details: "牛乳とパンを買う", deadline: "2026-07-01", done: true },
        { id: 2, title: "散歩", details: "近所を30分歩く", deadline: "2026-08-02", done: false },
        { id: 3, title: "勉強", details: "数学を学ぶ", deadline: "2026-09-03", done: true }
    ];

    const form = document.getElementById('todoForm');
    const result = document.getElementById('result');
    const getData = document.getElementById('getItem');
    //check if form element exists on toDo.html.
    if (!form) return;

    //display toDo list
    function renderToDoList() {
        if (!getData) return;

        getData.innerHTML = '';

        for (let i = 0; i < sample_toDoList.length; i++) {
            const getItem = sample_toDoList[i];

            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.justifyContent = 'space-between';
            row.style.alignItems = 'center';
            row.style.padding = '6px 0';

            const text = document.createElement('span');
            text.textContent = `${getItem.id}:  ${getItem.title}  ${getItem.details}  ${getItem.deadline || ''}`;
            //if done=true, add line on the text
            if (getItem.done) text.style.textDecoration = 'line-through';

            const done_button = document.createElement('button');
            done_button.textContent = getItem.done ? '未完了にする' : '完了にする';
            done_button.addEventListener('click', () => {
                //inverse true false
                sample_toDoList[i].done = !sample_toDoList[i].done;
                renderToDoList();
            });

            //delete button
            const delete_button = document.createElement('button');
            delete_button.textContent = '削除';
            //check if delete
            delete_button.addEventListener('click', () => {
                if(window.confirm('本当に削除しますか?')){
                    //delete item at index i
                    //splice(start, how many delete)
                    sample_toDoList.splice(i, 1);
                    renderToDoList();
                }
            })

            row.appendChild(text);
            row.appendChild(done_button);
            row.appendChild(delete_button);
            getData.appendChild(row);

            console.log(getItem);
        }
    }

    //reloard
    renderToDoList();

    form.addEventListener('submit', function (e) {
        //for quit the default behavior of form submission, which is to send a request to the server and reload the page.
        e.preventDefault();

        //input data properties
        const title = document.getElementById('title').value.trim();
        const details = document.getElementById('details').value.trim();
        const deadline = document.getElementById('deadline').value;

        //if title is empty, alert and return
        //details and deadline can be empty
        if (!title) {
            alert('タイトルを入力してください');
            return;
        }

        //create new toDo item
        const newItem = {
            //create id outmatically
            id: sample_toDoList.length ? sample_toDoList[sample_toDoList.length - 1].id + 1 : 1,
            title,
            details,
            deadline: deadline || null,
            done: false
        };

        //add new item
        sample_toDoList.push(newItem);

        //display result
        const out =
        `追加しました：
        タイトル: ${newItem.title},
        詳細: ${newItem.details},
        ${newItem.deadline ? '締切: ' + newItem.deadline : '締切なし'}`;
        //check if result element exists on toDo.html.
        if (result) result.textContent = out;
        console.log('todo added', newItem);

        renderToDoList();

        //reset form
        this.reset();
    });
});
