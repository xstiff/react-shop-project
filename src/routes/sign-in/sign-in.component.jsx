import SignUp from "../../Components/SignUpForm/signupform.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import "./sign-in.styles.scss";
import LogIn from "../../Components/Log-in/Log-in.component";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);

    return (
        <div className="LoginContainer">
            {user && navigate("../")}
            <LogIn />
            <SignUp />
        </div>
    );
};

export default SignIn;
