export default async function About() {
  const res = await fetch("http://localhost:3000/api/about");
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
