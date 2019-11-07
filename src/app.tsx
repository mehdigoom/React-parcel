import * as React from "react"

import Login from "./js/pages/login"

class App extends React.Component {
    render() {
        return (
            <Login title="Login page" />
        )
    }
}

// L'export par défault de notre fichier app.tsx est la class App qui a été extends par React
// Mon app peut être désormais importé dans d'autres fichiers de mon projet
export default App;