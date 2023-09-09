const PilatesOnline = () => {
  return <h1>Bine ati venit pe pagina noastra</h1>;
}

const Poza1 = () => {
return <img id="img" src="img1.jpeg" alt="pilates" width="500" height="450"/>
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