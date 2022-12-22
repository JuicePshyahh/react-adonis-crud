/* eslint-disable */
import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import {
  Card, CardBody, CardTitle, CardText, CardFooter, CardGroup
} from 'reactstrap'

const Task = (props) => {
  const {
    taskItems,
    onDelete,
    reload,
    setModal,
  } = props

  return (
      <div className='Card'>
        <CardGroup>
          <Card
            className="my-2"
            style={{
              width: '18rem'
            }}
          >
            <CardBody>
              <CardTitle tag="h3">
                {taskItems.task_title}
              </CardTitle>
              <CardText>
                {taskItems.comment}
              </CardText>
            </CardBody>
            <CardFooter>
              <AiFillEdit onClick={() => setModal('edit', taskItems)} /> <FaTimes onClick={() => onDelete(taskItems.id, reload)} />
            </CardFooter>
          </Card>
        </CardGroup>
      </div>
  )
}

export default Task




