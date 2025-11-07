import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/" className="text-blue-500 hover:underline mr-5">Go to Home Page</Link>
    </>
  )
}
