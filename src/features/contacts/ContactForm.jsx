import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./contactsSlice";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      (c) => c.name.toLowerCase() === name.toLowerCase(),
    );
    if (isDuplicate) {
      alert(`${name} вже є в контактах.`);
      return;
    }
    dispatch(addContact({ name, phone }));
    setName("");
    setPhone("");
  };

 return (
   <form className="contact-form" onSubmit={handleSubmit}>
     <label>
       Ім'я
       <input value={name} onChange={(e) => setName(e.target.value)} required />
     </label>
     <label>
       Телефон
       <input
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
         required
       />
     </label>
     <button type="submit">Додати контакт</button>
   </form>
 );
}
