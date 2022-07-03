import styles from './Styles/AddTarefa.module.css'
import {useState} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'

function AddTarefa(){

    const [task, setTask] = useState("")
    const [itemsList, setItemsList] = useState([])

    function valorInput(e){
        const inputTask = e.target.value

        setTask(inputTask)
    }

    function AddItems(e){
        e.preventDefault()
        
        if (!task){
            return
        }

        setItemsList([...itemsList, task])
        setTask("")
    }

    const removeLi = (index) => () =>
    setItemsList((items) => items.filter((_, i) => i !== index));
    
    return(
        <div className={styles.container}>
            <form onSubmit={AddItems}>
                <input className={styles.inputTarefa} type="text" placeholder="Escreva aqui sua tarefa" onChange={valorInput} value={task}/>
                <button className={styles.btnTarefa} type="submit">Adicionar tarefa</button>
            </form>

            <ul className={styles.ListaCSS}>
                {itemsList.map((item, index) => (
                <li key={index}>
                    <input type="checkbox"/>
                    {item}
                    <BsFillTrashFill className={styles.IconeRemove} onClick={removeLi(index)}/>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default AddTarefa