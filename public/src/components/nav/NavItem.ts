import { IIcons } from "../../../types/components/common/icons";

function NavItem (icon: IIcons) {
    const numCriteria = Number.parseInt(icon.style.backgroundPosition.split("px")[0]);

    return (`
        <div class="nav-item focused">
            <div class="sm-icon-img" style="background-position: ${numCriteria / 2}px ${numCriteria / 2}px;"></div>
            <p>${icon.name}</p>
        </div>`
    )
}

export default NavItem;