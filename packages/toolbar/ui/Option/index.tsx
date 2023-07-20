import { OptionItemContainer, OptionWrapper, SelectedIconWrapper, SelectedLabelWrapper } from "./style";
interface OptionProps {
  value: number | string;
  label: string;
  handleClick: (value: number | string) => void;
  selected?: boolean;
  disabled?: boolean;
}
const Option: React.FC<OptionProps> = ({ value, label, selected, disabled, handleClick }) => {
  return (
    <OptionWrapper disabled={!!disabled}>
      <OptionItemContainer disabled={!!disabled} onChange={() => handleClick(value)}>
        {
          !!selected &&
          <SelectedIconWrapper>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
              <path d='M12.5 3l1.5.944L5.671 13l-.885-.957L2 9l1.5-1 2.215 2.22z' fill='#1e6fff' fillRule='evenodd' />
            </svg>
          </SelectedIconWrapper>}
        <SelectedLabelWrapper data-value={value}>{label}</SelectedLabelWrapper>
      </OptionItemContainer>
    </OptionWrapper>
  );
};

export default Option;
