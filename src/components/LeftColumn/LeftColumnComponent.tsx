import { ChatFoldersComponent } from "./ChatFoldersComponent";

export function LeftColumnComponent() {
    return (
        <div className="LeftColumn">
            <div className="LeftColumn__container">
                <div className="LeftColumn__header"></div>
                <ChatFoldersComponent />
            </div>
        </div>
    );
}