import { useState } from "react";

export function RegistrationPage() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }
    return (
        <div className="LogPage">
            <div className="LogPage__container">
                <form action="" className="FormBox" onSubmit={event => submitHandler(event)}>
                    <div className="FormBox__container">
                        <div className="FormBox__headline">Registration</div>
                        <label htmlFor="" className="FormBox__label">
                            <input type="text" className="FormBox__input" placeholder="e-mail" onChange={event => onChangeMail(event)} />
                        </label>
                        <label htmlFor="" className="FormBox__label">
                            <input type="password" className="FormBox__input" placeholder="password" onChange={event => onChangePassword(event)}/>
                        </label>
                        <button type="submit" className="FormBox__button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}