import React from 'react'
import Task from './Task'

export default function TaskList() {
    const tasks = [{
        id: 1,
        text: 'Task1',
        doit: false
    },{
        id: 2,
        text: 'Task2',
        doit: true
    }]

    return (
        tasks.map((data)=>{
            return <Task taskText={data.text} isDo={data.doit} key={data.id}/>
        })
    )
}
