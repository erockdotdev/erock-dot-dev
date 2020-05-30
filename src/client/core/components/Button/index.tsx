import React from 'react';
import Classnames from 'classnames';
import './button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = props => {
  const { disabled, className, type = 'submit', onClick, children } = props;

  const showDisabledTheme = Classnames({
    'button__container--dark--disabled': disabled
  });
  const buttonStyles = Classnames(
    'button__container--dark',
    {
      'button__container--dark--disabled': showDisabledTheme
    },
    className
  );

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
      {children}
    </button>
  );
};

export default Button;
