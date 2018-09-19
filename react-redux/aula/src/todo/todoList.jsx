import React from 'react'
import IconButton from '../template/iconButton'
import {connect} from 'react-redux'    

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}> 
                <td className={todo.done ? 'markAsDone':''}> {todo.description} </td>
                <IconButton icon='trash-o' style='danger' hide={!todo.done} onClick={() => props.handleRemove(todo) } > </IconButton>
                <IconButton icon='check' style='success' hide={todo.done} onClick={() => props.handleMarkAsDone(todo) } > </IconButton>
                <IconButton icon='undo' style='warning' hide={!todo.done} onClick={() => props.handleMarkAsPending(todo) } > </IconButton>
            </tr>
        ))
        
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th > Descrição </th>
                    <th className='tableActions'> Ações </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list:state.todo.list})
export default connect(mapStateToProps)(TodoList)