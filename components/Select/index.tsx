import styled from "styled-components";

export type Item = { value: string; text: string };
export type SelectProps = { label: string; items: Item[]; value: string } & React.ComponentProps<"select">;

const Label = styled.label`
  padding: var(--xm);
  span:first-child {
    padding-right: var(--sm);
  }
`;

const Select = ({ label, items, value, onChange }: SelectProps) => {
  return (
    <Label>
      <span>{label}</span>
      <select value={value} name={label} onChange={onChange}>
        {items.map(({ value, text }) => {
          return (
            <option value={value} key={value}>
              {text}
            </option>
          );
        })}
      </select>
    </Label>
  );
};

export default Select;
