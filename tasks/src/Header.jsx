
import {useState} from "react";

function Header(){

    const [darkMode, turnedON] = useState(0);

    return (

        <header class="appHeader">
            <a href="#">WebSite Logo</a>

            <ul>
                <li class="headerFirst headerElements">Task List</li>
                <li class="headerElements">Tasks list</li>
                <li class="headerElements">Taks Log</li>
                <li class="headerElements"><button onClick={() => turnedON((darkMode == "dk_") ? darkMode = "lt_" : darkMode = "dk_")}>Dark / Light mode</button></li>
            </ul>
        </header>

    )

}

export default Header;