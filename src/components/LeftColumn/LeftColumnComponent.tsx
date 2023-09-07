import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTypedSlector } from "../../hooks/useTypedSelector";


export function LeftColumnComponent() {
    const {user_id, user_email, user_username, first_name, last_name, user_bio, user_avatar} = useTypedSlector(state => state.user)
    
    const search_gray_icon = require("../../img/search_gray_icon.png");
    const anonymous_image = require("../../img/anonymous_image.webp");
    // const {Theme, switcher} = useContext(ThemeContext);

    return (
        <div className="left-column">
            <div className="left-column__container">
                <div className="left-column__top">
                    <div className="left-column__header">
                        <div className="header__container">
                            <div className="menu-button">
                                <div className="dropdown-menu">
                                    <span></span>
                                </div>
                            </div>
                            <div className="search">
                                <input type="text" className="search__input" placeholder="Search"/>
                                <img src={search_gray_icon} alt="" className="search__icon" />
                            </div>
                        </div>
                    </div>
                    <div className="left-column__tab-list">
                        <div className="tab-list__container">
                            <div className="tab">
                                <div className="tab__container">
                                    <div className="tab__headline">All</div>
                                    <div className="selection-bar"></div>
                                </div>
                            </div>
                            <div className="tab">
                                <div className="tab__container">
                                    <div className="tab__headline">Chats</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-list">
                    <div className="chat-list__container">
                        <div className="list-item">
                            <div className="list-item__container">
                                <img src={anonymous_image} alt="" className="list-item__avatar" />
                                <div className="list-item__info">
                                    <div className="info__row">
                                        <div className="title">Anounimus 1</div>
                                        <div className="icon-muted"></div>
                                        <div className="separator"></div>
                                        <div className="last-message-info">
                                            <div className="last-message-status">
                                                {/* <img src={require("../../img/message_status_icoon.png")} alt="" className="message-status-icon"/> */}
                                                {/* <img src={require("../../img/message_status_icoon.png")} alt="" className="message-status-icon"/> */}
                                            </div>
                                            <div className="last-message-time">12:43</div>
                                        </div>
                                    </div>
                                    <div className="subtitle">
                                        <div className="last-message-preview">Hello man, how are?</div>
                                        <div className="chat-badge">
                                            <div className="chat-badge__pinned"></div>
                                            <div className="chat-badge__unread">
                                                <div className="unread__counter">10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="list-item__container">
                                <img src={anonymous_image} alt="" className="list-item__avatar" />
                                <div className="list-item__info">
                                    <div className="info__row">
                                        <div className="title">Iksiński</div>
                                        <div className="icon-muted"></div>
                                        <div className="separator"></div>
                                        <div className="last-message-info">
                                            <div className="last-message-status"></div>
                                            <div className="last-message-time">12:43</div>
                                        </div>
                                    </div>
                                    <div className="subtitle">
                                        <div className="last-message-preview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, qui.</div>
                                        <div className="chat-badge">
                                            <div className="chat-badge__pinned"></div>
                                            <div className="chat-badge__unread">
                                                <div className="unread__counter">10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}