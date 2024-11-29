import { FieldLabel, FieldLabelProps } from "../FieldLabel";

export interface CheckboxLabelProps extends FieldLabelProps {}

export const CheckboxLabel: React.FC<CheckboxLabelProps> = (props) => {
  return <FieldLabel {...props} />;
};
