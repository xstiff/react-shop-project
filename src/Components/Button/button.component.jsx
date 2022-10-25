import { type } from '@testing-library/user-event/dist/type';
import './button.styles.scss'


const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted',

}


const Button = ({children, type, ...Other}) => {
    return(
        <button className={`button-container ${BUTTON_TYPE[type]}`} {...Other}>
            {children}
        </button>
    )
}

export default Button;