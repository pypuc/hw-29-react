import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "./contactsSlice";

export default function ContactList() {
  const { contacts, filter } = useSelector((state) => state);
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const dispatch = useDispatch();

 return filtered.length ? (
   <ul className="contact-list">
     {filtered.map(({ id, name, phone }) => (
       <li key={id}>
         <span>
           {name}: {phone}
         </span>
         <button onClick={() => dispatch(deleteContact(id))}>Видалити</button>
       </li>
     ))}
   </ul>
 ) : (
   <p className="empty-message">Контактів поки немає</p>
 );
}
