const ToDo = ({todo}) => {
    return (
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    )
}

export default ToDo;