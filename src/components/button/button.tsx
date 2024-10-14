type ButtonProps = {
  activeElement: string;
  onClick: () => void;
  textElement: string;
}

const Button = ({activeElement, onClick, textElement}: ButtonProps): JSX.Element => (
  <button className={`tabs__control ${activeElement}`} type="button" onClick={onClick}>{textElement}</button>
);

export default Button;
