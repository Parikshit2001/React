import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1>404 NotFound</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFoundPage;
