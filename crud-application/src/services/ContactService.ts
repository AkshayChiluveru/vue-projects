import axios from 'axios';
import source from '../components/data.json'

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
    }
})
const response=source.contacts;
export default{
    getAllContacts(){
        const response=source.contacts
    },
    getContact(contactId: any){
        return client.get(contactId);
       
    },
    createContact(contact:any){
        return client.post(contact)
    },
     updateContact(contact:any, contactId:any){
        return client.put(contact, contactId);
        
    },
    deleteContact(contactId: any){
       response.splice(contactId,1)
        
    },
}