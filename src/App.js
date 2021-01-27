import shortid from 'shortid';
import './App.css';
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/contactForm';
import ContactList from 'components/ContactList/contactList';
import Filter from 'components/Filter/filter';
import s from 'app.module.css';
import Container from 'components/Container/container';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = ({name, number}) => {
    const contact = {
        id: shortid.generate(),
        name,
        number: number,
    };
    this.setState(prevState =>{
      if(this.state.contacts.find((contact)=>contact.name===name)){
        alert (`${contact.name} is already in contacts.`)
      }
      else{
      return {
          contacts: [...prevState.contacts, contact],}}
  })
};

deleteContact = contactId =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id!== contactId),
  }))
 
}

changeFilter = filter => {
  this.setState({filter});
}
  
getVisibleContacts = ()=>{
  const {contacts, filter} = this.state;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()), 
    )
}
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if(parsedContacts){
    this.setState({ contacts: parsedContacts });}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  render() {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
       <h1 className={s.title}>Phonebook</h1>
     <ContactForm onAddContact={this.addContact} />
     {visibleContacts.length > 0 && <div><h2>Contacts</h2><Filter value={filter} onChangeFilter ={this.changeFilter}/>
     <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/></div>}
     </Container>
    );
  }
}

export default App;
