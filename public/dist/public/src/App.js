import Icons from "./components/common/Icons";
function Container() {
    const a = Icons();
    console.log("a", a);
    return (`
        <div class="container">
            ${Icons()}
            <nav class="status-container" aria-label="하단 상태 창"></nav>
        </div>
    `);
}
export default Container;
//# sourceMappingURL=App.js.map