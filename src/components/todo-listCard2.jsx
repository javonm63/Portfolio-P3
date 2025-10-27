import '../styles/todo-listCard.css'

function TodoListCard2({cartoons, setProgress, level, setLevel, setStars, setCompTask, savedTaskList, deleteTask}) {
    const increaseProgress = () => {
        setCompTask((prev) => prev + 1)
        setStars((prev) => prev + 5)
        setProgress((prev) => {
        const next = prev + 5;
        if (next > 20) {
            setLevel(level + 1)
            return 0
        } else {
            return next
        }
        });
    };
    return (
        <section className='todo-ListCard-main-container' style={{display: cartoons ? 'flex' : 'none'}}>
            <p className='myList-aside-titles'>Saved Todos</p>
            <ol className='todo-list-tasks-cont'>
                {savedTaskList && savedTaskList.map((obj, i) => (
                   <li key={i} className='task'>
                        <div className='task-div'>
                            <p className='task-title'>{obj.taskName}</p>
                            <div >
                                <button className='task-action-btns' type='button'>A</button>
                                <button className='task-action-btns' type='button' onClick={increaseProgress} >C</button>
                                <button className='task-action-btns' type='button' value={obj.taskId} onClick={deleteTask}>D</button>
                            </div>
                        </div>
                        <p className='task-descript'>{obj.taskDescrip}</p>
                        <div className='task-border'></div>
                    </li> 
                ))}
            </ol>
        </section>
    )
}

export default TodoListCard2