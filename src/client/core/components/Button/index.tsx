import React from 'react';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { disabled, label, className, type = 'submit', onClick } = props;

  const showDisabledTheme = disabled ? 'button__container--dark--disabled' : '';
  const buttonStyles = className
    ? `${className}`
    : `button__container--dark ${showDisabledTheme}`;

  return (
    /*
     * JSX line disabled for ESLint due to questionable rule implementation
     * see https://github.com/yannickcr/eslint-plugin-react/issues/1555
     */
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonStyles}
    >
      {label}
    </button>
  );
};

export default Button;
