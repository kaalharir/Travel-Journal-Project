// import Header from "./components/Header";
// import Entry from "src/components/Entry.jsx"
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";


export default function App() {
    // return <Header />;
    return (
        // <div className="app">
        //     <Entry />
        // </div>
        <>
            <Header />
            <main className="container">
            <Entry />
            <Entry />
            </main>
        </>
    );
}
