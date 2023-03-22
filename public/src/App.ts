import Icons from "./components/Icons";

function Container() {
    return (`
        <div class="container">
            ${Icons()}
            <nav class="status-container" aria-label="하단 상태 창"></nav>
        </div>
    `)
}

export default Container;