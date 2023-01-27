import React, { Component } from 'react';
import { FormInput, Label, Button, Title, FormWrap} from './Form.styled';
import shortid from 'shortid';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleSubmit = event => {
    event.preventDefault();

    this.props.submitProp(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <Title>Phone Book</Title>
        <FormWrap onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name
            <FormInput
              onChange={this.handleInputChange}
              type="text"
              name="name"
              placeholder="  type name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              id={this.nameInputId}
              required
            />
          </Label>

          <Label htmlFor={this.numberInputId}>
            Number
            <FormInput
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              placeholder="  type digits"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              id={this.numberInputId}
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </FormWrap>
      </div>
    );
  }
}

export default Form;
