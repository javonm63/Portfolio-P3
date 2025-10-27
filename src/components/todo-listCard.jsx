import '../styles/todo-listCard.css'
import { useEffect } from 'react'

function TodoListCard({trending, compTaskList, setCompTaskList, deleteTask}) {
    useEffect(() => {
        const loadCompTasks = JSON.parse(sessionStorage.getItem('Completed Tasks'))
        setCompTaskList(loadCompTasks)
    }, [])  

    return (
        <section className='todo-ListCard-main-container' style={{display: trending ? 'flex' : 'none'}}>
            <p className='myList-aside-titles'>Completed Todos</p>
            <ol className='todo-list-tasks-cont'>
                {compTaskList && compTaskList.map((task, i) => (
                    <li key={i} className='task'>
                        <div className='task-div'>
                            <p className='task-title'>{task.taskName}</p>
                            <div >
                                <button className='task-action-btns' type='button' value={task.taskId} onClick={deleteTask}>D</button>
                            </div>
                        </div>
                        <p className='task-descript'>{task.taskDescrip}</p>
                        <div className='task-border'></div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default TodoListCard