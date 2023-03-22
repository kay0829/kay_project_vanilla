import { render } from "./core/CustomReact";
import Container from "./App";

const root = document.querySelector("#root");
if (root) {
    render(root, Container)
}

