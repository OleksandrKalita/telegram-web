import React, { ChangeEvent, FormEvent, useState } from "react";
import { RegistrationNewUser } from "../../async/registrationFunctions";
import { RegistrationDataProps } from "../../types/authenticationTypes";
import { useNavigate } from "react-router-dom";

function generateUserID() {
    // Отримуємо поточну дату та час у мілісекундах (timestamp)
    const timestamp = new Date().getTime();
    
    // Додаємо деякий випадковий номер (наприклад, від 0 до 999) для забезпечення унікальності
    const random = Math.floor(Math.random() * 1000);
    
    // Комбінуємо timestamp та випадковий номер
    const userID = timestamp + random;
    
    return userID.toString(); // Повертаємо унікальний ID у вигляді рядка
}


function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    return emailRegex.test(email);
}
function isValidPassword(password: string) {
    const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!])(?!.*[\s@#$%&*?<>()'"_-]).{7,14}$/;
    return passwordRegex.test(password);
}

export function RegistrationPage() {
    const navigate = useNavigate();

    // const emailInputElement = document.getElementById("email_field") as HTMLInputElement;
    // const passwordInputElement = document.getElementById("password_field") as HTMLInputElement;

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

        setStatePassword(true);

        let ERRORS = 0;
        setEmailError(false);
        setPasswordError(false);

        if(!isValidEmail(email)) {
            setEmailError(true);
            ERRORS++;
        }
        if(!isValidPassword(password)) {
            setPasswordError(true);
            ERRORS++;
        }
        if(ERRORS > 0) {
            return 0;
        }

        const RegData: RegistrationDataProps = {
            userId: generateUserID(),
            email,
            password,
        }

        RegistrationNewUser(RegData);
        
        navigate("/login-page")
    }
    return (
        <div className="LogPage">
            <div className="LogPage__container">
                <form action="" className="FormBox" onSubmit={event => submitHandler(event)}>
                    <div className="FormBox__container">
                        <div className="FormBox__headline">Registration</div>
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