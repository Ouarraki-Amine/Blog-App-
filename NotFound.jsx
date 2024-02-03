import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function NotFound(){
    return <div className="not-found">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Return to the Home Page</Link>
    </div>
}