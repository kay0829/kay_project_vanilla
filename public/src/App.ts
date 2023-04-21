import Icons from "./components/common/Icons";
import Nav from "./components/nav/Nav";

function Container() {
    return (`
        <div class="container">
            ${Icons()}
            ${Nav()}
        </div>
    `)
}

export default Container;