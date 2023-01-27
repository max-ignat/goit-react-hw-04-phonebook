import { FilterWraper, Label, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
    return (
      <FilterWraper>
        <Label> Find contacts by name: <FilterInput type="text" value={value} onChange={onChange} />
    </Label>
      </FilterWraper>
    
  );
};

export default Filter;