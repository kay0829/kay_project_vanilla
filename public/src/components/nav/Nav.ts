import store from "../../reducer/store";
import NavItem from "./NavItem";


function Nav() {
    const { dispatch, getState } = store;
    const { modals: modalsState } = getState();

    return (`
        <footer id="ststus-display-bar" aria-label="하단 상태 창">
            <button class="window-button">
                <img src="./assets/window-logo.png" alt="윈도우 로고" />
                <p>시작</p>
            </button>
            <nav>
                ${modalsState.modals.map((modal) => NavItem(modal)).join('')}
            </nav>
            <div class="cur-time">
                <p>오전 11:55</p>
            </div>
        </footer>
    `)
}

export default Nav;