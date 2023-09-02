import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDataProps } from "../../types/authenticationTypes";
import { isCorrectLoginData } from "../../async/loginFunction";

export function LoginPage() {
    const navigate = useNavigate();

    const [emailPlaceholder, setEmailPlaceholder] = useState<string>("e-mail");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState<string>("password");

    const [statePassword, setStatePassword] = useState<boolean>(true);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [emailError, setEmailError] = useState<boolean>();
    const [passwordError, setPasswordError] = useState<boolean>();

    const emailFieldStyle = emailError ? "FormBox__input error" : "FormBox__input" 
    const passwordFieldStyle = passwordError ? "FormBox__input error" : "FormBox__input" 

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
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        const Data: LoginDataProps = {
            email,
            password,
        }

        isCorrectLoginData(Data)
        .then(data => navigate("/"))
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
                            <input id="email_field" type="text" className={emailFieldStyle} placeholder={emailPlaceholder} onChange={event => onChangeMail(event)} onFocus={event => emailFocusHandler(event)} onBlur={event => emailBlurHandler(event)} />
                        </label>
                        <label htmlFor="" className="FormBox__label">
                            <input id="password_field" type={statePassword ? "password" : "text"} className={passwordFieldStyle} placeholder={passwordPlaceholder} onChange={event => onChangePassword(event)} onFocus={event => passwordFocusHandler(event)} onBlur={event => passwordBlurHandler(event)}/>
                            {statePassword ? <div className="password-switcher" onClick={() => setStatePassword(!statePassword)}>o</div> 
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