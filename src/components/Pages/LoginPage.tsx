import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDataProps } from "../../types/authenticationTypes";
import { isCorrectLoginData } from "../../async/loginFunction";
import { useDispatch } from "react-redux";
import { UserAction, UserActionTypes } from "../../types/user";
import { getUserData_email } from "../../async/requestsToDB";

export function LoginPage() {
    console.log("login page");
    const dispatch: Dispatch<UserAction> = useDispatch();
    const password_icon = require("../../img/password_icon.png")

    const navigate = useNavigate();

    const [emailPlaceholder, setEmailPlaceholder] = useState<string>("e-mail");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState<string>("password");

    const [statePassword, setStatePassword] = useState<boolean>(true);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [emailError, setEmailError] = useState<boolean>();
    const [passwordError, setPasswordError] = useState<boolean>();

    function emailFocusHandler(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.value.trim() === "") {
            setEmailPlaceholder("");
            setStatePassword(true);
        }
    }
    function emailBlurHandler(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.value.trim() === "") {
            setEmailPlaceholder("e-mail");
        }
    }
    function passwordFocusHandler(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.value.trim() === "") {
            setPasswordPlaceholder("");
        }
    }
    function passwordBlurHandler(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.value.trim() === "") {
            setPasswordPlaceholder("password");
        }
    }

    const onChangeMail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailError(false);
        setEmail(event.target.value);
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordError(false);
        setPassword(event.target.value);
    }
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        console.log("submit");
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        const LoginData: LoginDataProps = {
            email,
            password,
        }

        isCorrectLoginData(LoginData)
        .then(data => {
            getUserData_email(LoginData.email)
            .then(user => {
                dispatch({type: UserActionTypes.LOG_IN_USER, payload: user});
                const userId:any = user.user_id;
                localStorage.setItem("user_id", userId);
            })
            .catch(error => console.error(error));
        })
        .catch(error => {
            setEmailError(true);
            setPasswordError(true);
        })
    }
    return (
        <div className="LogPage">
            <div className="LogPage__container">
                <form action="" className="FormBox" onSubmit={event => submitHandler(event)}>
                    <div className="FormBox__container">
                        <div className="FormBox__headline">Login</div>
                        <label htmlFor="" className="FormBox__label">
                            <input id="email_field" type="text" className={`FormBox__input ${emailError ? "error" : "" }`} placeholder={emailPlaceholder} onChange={event => onChangeMail(event)} onFocus={event => emailFocusHandler(event)} onBlur={event => emailBlurHandler(event)} />
                        </label>
                        <label htmlFor="" className="FormBox__label">
                            <input id="password_field" type={statePassword ? "password" : "text"} className={`FormBox__input ${passwordError ? "error" : "" }`} placeholder={passwordPlaceholder} onChange={event => onChangePassword(event)} onFocus={event => passwordFocusHandler(event)} onBlur={event => passwordBlurHandler(event)}/>
                            {statePassword ? <div className="password-switcher" onClick={() => setStatePassword(!statePassword)}>
                                <img src={password_icon} alt="" />
                            </div> 
                            : <div className="password-switcher" onClick={() => setStatePassword(!statePassword)}>x</div>}
                        </label>
                        {/* <div className="password-notes">Тільки цифри та букви і один обовʼязковий символ '!' </div> */}
                        <button type="submit" className="FormBox__button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}