const PilatesOnline = () => {
  return <h1>Bine ati venit pe pagina noastra</h1>;
}

const Poza1 = () => {
return <img id="img" src="img1.jpeg" alt="pilates" width="500" height="450"/>
}

const TextSite = () => {
  return (
    <div>
    <h2>Pilates Online</h2>
    <p>Pilates este un antrenament extraordinar care pleaca de la premisa ca un corp sanatos inseamna o legatura permaneta cu mintea.</p>
    <p>Metoda Pilates nu are miscari de impact si astfel este perfect sa faci acasa. Daca nu ai salteluta, pui o patura si esti gata de antrenament.</p>
    <p>Clasele de Pilates Online pot fi practicate si de persoane cu unele probleme de sanatate (afectiuni ortopedice, afectiuni articulare, persoane supraponderale, etc.)</p>
    </div>
  )
}

 const App = () => {
  return (
    <div>
      <PilatesOnline/>
      <Poza1/>
    </div>
  );
 }

 export default App;