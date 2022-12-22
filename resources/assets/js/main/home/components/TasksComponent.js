/* eslint-disable */
import React from 'react'
import Task from './Task'

const TasksComponent = ({ data, onDelete, setModal, reload, }) => {

    return (
        <div className='form-control-task'>
          <div className={`task ${"taskItems.id" ? 'reminder' : ''}`}>
          {data.map((task, index) => (
        <Task
            key={index}
            taskItems={task}
            reload={reload}
            onDelete={onDelete}
            setModal={setModal}
        />
      ))}
          </div>

        </div>
    )
}

export default TasksComponent
