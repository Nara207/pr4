import { useEffect, useState } from 'react'
import s from './UserPage.module.css'
import Search from "../../components/Search/Search"

export default function UserPage(){
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users'),{
            method: 'POST',
            body: formData
        }
        e.target.reset();
        setMessage('Форма отправлена');
    }
    function handleChange(e){
        setSearch(e.target.value);
    }
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
        setUsers(users);
    }
    useEffect(()=>{
        fetchUsers();
    }, []);
    console.log(users)

    const filtredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()));

    return(
        <div className="container">
            <form>
                <input onSubmit={handleSubmit} type="text" name='name' className={s.name} placeholder='' />
                <input type="text" name='username' className={s.username} placeholder='' />
                <button type="submit" className={s.button} >Отправить форм</button>
                <p>{message}</p>
            </form>
            <div className="users">
                <Search handleChange={handleChange}/>
                {   
                    filtredUsers.length 
                    ?
                    filtredUsers.map(user => {
                        return(
                            <div className="user" style={{padding: '15px', border: '1px solid #e5e5e5', marginBottom: '20px'}}>
                                <h3>id: {user.id}</h3>
                                <p>{user.name}</p>
                                <p>{user.username}</p>
                            </div>
                        )
                        
                    })
                    :
                    <p>По запросу "{search}" ничего не найдено</p>   
                }
            </div>
            
        </div>
    )
}
