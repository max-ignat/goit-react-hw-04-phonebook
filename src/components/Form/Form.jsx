import React , { useState } from 'react';
import { Formik } from 'formik';
import { FormInput, Label, Button, Title, FormWrap, Error} from './Form.styled';
import shortid from 'shortid';
import * as yup from 'yup';



const schema = yup.object().shape({
  name: yup.string().required('Name is required field'),
  number: yup.number().min(6).required('Enter minimum 6 digits').positive().integer(),
});

const Form = ({ submitPropValue }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    // console.log(event.currentTarget.value);

    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    submitPropValue({ name, number });

    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const { name, number } = state;
  return (
    <div>
      <Title>Phone Book</Title>
      <Formik validationSchema={schema}>
        <FormWrap onSubmit={handleSubmit}>
          <Label htmlFor={nameInputId}>
            Name
            <FormInput
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="  type name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              id={nameInputId}
              required
            />
            <Error component="div" name="name" />
          </Label>

          <Label htmlFor={numberInputId}>
            Number
            <FormInput
              onChange={handleChange}
              type="tel"
              name="number"
              placeholder="  type digits"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              id={numberInputId}
              required
            />
            <Error component="div" name="number" />
          </Label>

          <Button type="submit">Add contact</Button>
        </FormWrap>
      </Formik>
    </div>
  );
};

export default Form;
