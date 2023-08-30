import { LeftColumnComponent } from "../LeftColumn/LeftColumnComponent";
import { RightChatBlock } from "../RightColumn/RightChatBlock";

export function MainPage() {
    return (
        <div className="MainPage">
            <div className="MainPage__container">
                <LeftColumnComponent />
                <RightChatBlock />
            </div>
        </div>
    );
}