import { useEffect } from 'react'
import ProgressBar from '../components/progressBar'
import StatCard from '../components/statCard'
import TodoListCard from '../components/todo-listCard'
import TodoListCard2 from '../components/todo-listCard2'
import { todoHooks } from '../hooks/homepageHooks'
import '../styles/myList.css'

function MyList({disp, all, trending, cartoons, progress, setProgress, compTask, setCompTask, stars, setStars}) {
    const todoHook = todoHooks()
    const level = todoHook.level
    const setLevel = todoHook.setLevel
    const taskName = todoHook.taskName
    const setTaskName = todoHook.setTaskName
    const taskDescrip = todoHook.taskDescrip
    const setTaskDescrip = todoHook.setTaskDescrip
    const taskDate = todoHook.taskDate 
    const setTaskDate = todoHook.setTaskDate
    const taskList = todoHook.taskList
    const setTaskList = todoHook.setTaskList
    const compTaskList = todoHook.compTaskList
    const setCompTaskList = todoHook.setCompTaskList
    const savedTaskList = todoHook.savedTaskList
    const setSavedTaskList = todoHook.setSavedTaskList

    useEffect(() => {
        const loadTasks = JSON.parse(sessionStorage.getItem('Todo Tasks'))
        setTaskList(loadTasks || [])
        const loadCompTasks = JSON.parse(sessionStorage.getItem('Completed Tasks'))
        setCompTaskList(loadCompTasks || [])
        const loadSavedTasks = JSON.parse(sessionStorage.getItem('Saved Tasks'))
        setSavedTaskList(loadSavedTasks || [])
    }, [])

    async function addTask() {
        const taskId = Math.floor(Math.random() * 3000)
        const taskObj = { taskName, taskDescrip, taskDate , taskId};

        setTaskList((prev) => {
            const safePrev = Array.isArray(prev) ? prev : [];
            const updated = [...safePrev, taskObj];
            sessionStorage.setItem("Todo Tasks", JSON.stringify(updated));
            return updated;
        });
        setTaskName('')   
        setTaskDescrip('')   
        setTaskDate('')   
    }
    function completeTask(e) {
        const id = e.target.value
        const todoTasks = JSON.parse(sessionStorage.getItem('Todo Tasks'))
        const taskIndex = todoTasks.findIndex((task) => String(task.taskId) === String(id))
        const task = todoTasks.find((task) => String(task.taskId) === String(id))
        const updatedTasks = todoTasks.splice(taskIndex, 1)
        if (todoTasks.length === 0) {
            setTaskList(() => {
                sessionStorage.removeItem("Todo Tasks");
                return todoTasks;
            });
        } else {
            setTaskList(() => {
                sessionStorage.setItem("Todo Tasks", JSON.stringify(todoTasks));
                return todoTasks;
            });
        }
        setCompTaskList((prev) => {
            const updated1 = [...prev, task];
            sessionStorage.setItem("Completed Tasks", JSON.stringify(updated1));
            return updated1;
        });

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
    }
    function deleteTask(e) {
        const id = e.target.value
        if (all) {
            const todoTasks = JSON.parse(sessionStorage.getItem('Todo Tasks'))
            const taskIndex = todoTasks.findIndex((task) => String(task.taskId) === String(id))
            const task = todoTasks.find((task) => String(task.taskId) === String(id))
            const updatedTasks = todoTasks.splice(taskIndex, 1)
            if (todoTasks.length === 0) {
                setTaskList(() => {
                    sessionStorage.removeItem("Todo Tasks");
                    return todoTasks;
                });
            } else {
                setTaskList(() => {
                    sessionStorage.setItem("Todo Tasks", JSON.stringify(todoTasks));
                    return todoTasks;
                });
            }
        } else if (trending) {
            const todoTasks = JSON.parse(sessionStorage.getItem('Completed Tasks'))
            const taskIndex = todoTasks.findIndex((task) => String(task.taskId) === String(id))
            const task = todoTasks.find((task) => String(task.taskId) === String(id))
            const updatedTasks = todoTasks.splice(taskIndex, 1)
            if (todoTasks.length === 0) {
                setCompTaskList(() => {
                    sessionStorage.removeItem("Completed Tasks");
                    return todoTasks;
                });
            } else {
                setCompTaskList(() => {
                    sessionStorage.setItem("Completed Tasks", JSON.stringify(todoTasks));
                    return todoTasks;
                });
            }
        } else if (cartoons) {
            const todoTasks = JSON.parse(sessionStorage.getItem('Saved Tasks'))
            const taskIndex = todoTasks.findIndex((task) => String(task.taskId) === String(id))
            const task = todoTasks.find((task) => String(task.taskId) === String(id))
            const updatedTasks = todoTasks.splice(taskIndex, 1)
            if (todoTasks.length === 0) {
                setSavedTaskList(() => {
                    sessionStorage.removeItem("Saved Tasks");
                    return todoTasks;
                });
            } else {
                setSavedTaskList(() => {
                    sessionStorage.setItem("Saved Tasks", JSON.stringify(todoTasks));
                    return todoTasks;
                });
            }
        }
        
    }

    function saveTask(e) {
        const id = e.target.value
        const todoTasks = JSON.parse(sessionStorage.getItem('Todo Tasks'))
        const taskIndex = todoTasks.findIndex((task) => String(task.taskId) === String(id))
        const task = todoTasks.find((task) => String(task.taskId) === String(id))
        const updatedTasks = todoTasks.splice(taskIndex, 1)
        if (todoTasks.length === 0) {
            setTaskList(() => {
                sessionStorage.removeItem("Todo Tasks");
                return todoTasks;
            });
        } else {
            setTaskList(() => {
                sessionStorage.setItem("Todo Tasks", JSON.stringify(todoTasks));
                return todoTasks;
            });
        }
        setSavedTaskList((prev) => {
            const updated1 = [...prev, task];
            sessionStorage.setItem("Saved Tasks", JSON.stringify(updated1));
            return updated1;
        });
    }
    return (
        <div className='myList-main-container' style={{display: disp ? 'flex' : 'none'}}>
            <article className='myList-todo-container'>
                <h3 className='myL-page-title'>YOUR TODO APP</h3>
                <section className='todo-input-container' style={{display: all ? 'flex' : 'none'}}>
                    <p className='myList-aside-titles'>Add New Task</p>
                    <div className='todo-input-sub-container'>
                        <div className='todo-inputs-flexbox'>
                            <input className='todo-inputs' type='text' placeholder='Enter a task here' value={taskName} onChange={(e) => setTaskName(e.target.value)} required></input>
                            <input className='todo-inputs' type='text' placeholder='Enter task description' value={taskDescrip} onChange={(e) => setTaskDescrip(e.target.value)} required></input>
                        </div>
                        <p className='task-dueDate-label'>Due Date: </p>
                        <input className='todo-inputs' type='date' value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
                    </div>
                    <button className='add-task-button' type='submit' onClick={addTask} >ADD TASK</button>
                </section>
                <TodoListCard trending={trending} compTaskList={compTaskList} setCompTaskList={setCompTaskList} deleteTask={deleteTask}/>
                <TodoListCard2 cartoons={cartoons} setProgress={setProgress} level={level} setLevel={setLevel} setStars={setStars} setCompTask={setCompTask} savedTaskList={savedTaskList} deleteTask={deleteTask}/>
                <section className='todo-list-container' style={{display: all ? 'flex' : 'none'}}>
                    <p className='myList-aside-titles'>Todo List</p>
                    <ol className='todo-list-tasks-cont'>
                        {taskList && taskList.map((task, i) => (
                            <li key={i} className='task'>
                                <div className='task-div'>
                                    <p className='task-title'>{task.taskName}</p>
                                    <div >
                                        <button className='task-action-btns' type='button' value={task.taskId} onClick={completeTask}>C</button>
                                        <button className='task-action-btns' type='button' value={task.taskId} onClick={saveTask}>S</button>
                                        <button className='task-action-btns' type='button' value={task.taskId} onClick={deleteTask}>D</button>
                                    </div>
                                </div>
                                <p className='task-descript'>{task.taskDescrip}</p>
                                <div className='task-border'></div>
                            </li>
                        ))}
                    </ol>
                </section>
                <section className='todo-bottom-card' style={{display: all ? 'flex' : 'none'}}>
                    <p className='myList-aside-titles'>Quote Of The Day</p>
                    <p className='todo-quote-of-the-day'>'Pretend this is something inpirational' -Someone</p>
                </section>
            </article>
            <article className='myList-aside-container'>
                <section className='myList-yourProgress-cont'>
                    <p className='myList-aside-titles'>Your Stats</p>
                    <div className='myList-stat-cont'>
                        <StatCard stat={'stars'} statIcon={'/star-icon.png'} statNum={stars} statTitle={'STARS'}/>
                        <StatCard stat={'completed'} statIcon={'/comp-icon.png'} statNum={compTask} statTitle={'TASKS'}/>
                    </div>   
                </section>
                <section className='myList-yourStats-cont'>
                    <p className='myList-aside-titles'>Progress</p>
                    <ProgressBar progress={progress} level={level}/>
                </section>
                <section className='myList-parent-todos-cont'>
                    <p className='myList-aside-titles'>Mom & Dad</p>
                    <p className='myList-parent-todo-placeholder'>COMING SOON!</p>
                </section>
            </article>
        </div>
    )
}

export default MyList