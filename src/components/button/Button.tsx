import "./button.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = (buttonProps: ButtonProps) => {
  return (
    <button onClick={buttonProps.onClick} className="my-button">
      {buttonProps.children}
    </button>
  );
};

export default Button;
