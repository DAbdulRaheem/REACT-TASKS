import React from "react";
import { ColorChanger } from "./components/color_changer";
import { Messager } from "./components/messager";

function App() {
    return (
        <div>
            <h1>Color Changer</h1>
            <ColorChanger />
            <h1>Message Toggle</h1>
            <Messager />
        </div>
    );
}

export default App;
