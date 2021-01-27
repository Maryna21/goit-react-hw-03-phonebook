import React from 'react';
import PropTypes from 'prop-types';
import s from 'components/ContactList/contactList.module.css';

const ContactList = ({contacts, onDeleteContact})=>(

  <ul>
    {contacts.map(({id, name, number}) => (
      <li className={s.item} key={id}> {name}: { number };
      <button className={s.buttonDelete} type="button" onClick={()=> onDeleteContact(id)}>Delete</button></li>
    ))}
  </ul>

)
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    }),
  )
};
export default ContactList;