import "./App.css";
import ContactForm from "./features/contacts/ContactForm";
import ContactList from "./features/contacts/ContactList";
import Filter from "./features/contacts/Filter";

export default function App() {
  return (
    <div className="app">
      <h1>Книга контактів</h1>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
