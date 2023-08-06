import css from './Contacts.module.css';
import PropTypes from 'prop-types';
export const Contacts = ({deleteContact, valueFilter, allContacts}) => {
  const deleteContacts = e => {
    let idToDelete = e.currentTarget.id;
    deleteContact (idToDelete);
  };
  const filterItems = ary => {
    let arryContacts = ary.filter (el => {
      return el.name.toLowerCase ().indexOf (valueFilter.toLowerCase ()) > -1;
    });
    return arryContacts.map ((el, i) => {
      return (
        <li
          key={i.toString ()}
          id={el.id}
          className={css.list}
          onClick={deleteContacts}
        >
          {el.name}
          :
          {el.tel}
          <button type="button" className={css.button}>delete</button>
        </li>
      );
    });
  };
  const renderContacts = arry => {
    if (arry.length === 0) {
      return;
    }
    if (valueFilter === '') {
      return arry.map ((el, i) => {
        return (
          <li
            key={i.toString ()}
            id={el.id}
            className={css.list}
            onClick={deleteContacts}
          >
            {el.name}
            :
            {el.tel}
            <button type="button" className={css.button}>delete</button>
          </li>
        );
      });
    }
    return filterItems (arry);
  };

  return (
    <u className={css.item}>
      {renderContacts (allContacts)}
    </u>
  );
};

Contacts.propTypes = {
  allContacts: PropTypes.array.isRequired,
  valueFilter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
