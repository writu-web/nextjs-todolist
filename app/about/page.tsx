import { GET } from "../api/about/route";

export default async function About() {
  const res = await GET();
  const data = await res.json();
  return (
    <div className="container">    
        <h2>About us</h2> 
        <p>
          {data.message}
        </p>
    </div>
  );
}
