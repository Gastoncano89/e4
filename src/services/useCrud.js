import axios from "axios"
import { useState } from "react"

const useCrud = () => {

    const [users, setUsers] = useState()  

    const getAllUsers = () => {
        const URL = 'https://todos-crud-f6qg.onrender.com/users/'
        axios.get(URL)
          .then(res => setUsers(res.data))
          .catch(err => console.log(err))
      }
    
      const createNewUser = data => {
        const URL = 'https://todos-crud-f6qg.onrender.com/users/'
        axios.post(URL, data)
          .then(() => getAllUsers())
          .catch(err => console.log(err))
      }
    
      const deleteUserById = (id) => {
        const URL = `https://todos-crud-f6qg.onrender.com/users/${id}/`
        axios.delete(URL)
          .then(() => getAllUsers())
          .catch(err => console.log(err))
      }
    
      const updateUserById = (id, data) => {
        const URL = `https://todos-crud-f6qg.onrender.com/users/${id}`
        axios.post(URL, data)
          .then(res => getAllUsers())
          .catch(err => console.log(err))
      }

      return {users, createNewUser, getAllUsers, deleteUserById, updateUserById}
}

export default useCrud