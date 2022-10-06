import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import Dictionary from "./Dictionary";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="container">
                    <Dictionary/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
