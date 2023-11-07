import { StyledFilterButton } from 'Components/Filter/Filter.styled';
import { StyledContactItemLi } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { Loader } from 'Components/Loader/Loader';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts.selectors';

export const ContactIem = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const filter = useSelector(state => state.filter.filterData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredContacts.map(({ name, number, id }) => (
        <StyledContactItemLi key={id}>
          {name} : {[number]}
          <StyledFilterButton
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </StyledFilterButton>
        </StyledContactItemLi>
      ))}
    </div>
  );
};
