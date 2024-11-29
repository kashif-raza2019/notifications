import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2
        style={{
          fontSize: "2rem",
          fontFamily: "fantasy",
        }}
      >
        Oops, It seems you went down a wrong path!
      </h2>
      <div style={{ padding: "1rem"}}>
        <Link href="/" className="btn btn-outline-info" style={{ margin: '10px' }}>
          <i className="bi bi-house-door-fill"></i> Home   
        </Link>
        <Link href="/bug-report" className="btn btn-outline-danger"  style={{ margin: '10px' }}>
          <i className="bi bi-bug-fill text-danger"></i>Bug Report
        </Link>
      </div>
    </div>
  );
}
