import { useEffect } from "react";
import { LeftColumnComponent } from "../LeftColumn/LeftColumnComponent";
import { RightChatBlock } from "../RightColumn/RightChatBlock";
import { getTheme } from "../../async/requestsForContext";
import { useNavigate } from "react-router-dom";

export function MainPage() {
    useEffect(() => {

    }, [])
    return (
        <div className="main-page">
            <div className="main-page__container">
                <LeftColumnComponent />
                <RightChatBlock />
            </div>
        </div>
    );
}