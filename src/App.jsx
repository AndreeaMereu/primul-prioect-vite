const PilatesOnline = () => {
  return <h1 class="text-color">Bine ati venit pe pagina noastra</h1>;
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

const TextSite2 = () => {
  return (
    <div>
    <h2>Beneficii</h2>
    <p>Joseph Pilates, creatorul acestui program spune ca „Te va face sa te simti mai bine dupa 10 sedinte, vei arata mai bine dupa 20 de sedinte si vei avea un corp complet remodelat dupa 30 de sedinte”.</p>
    <p>Dezvoltă musculatura</p>
    <p>Scopul exercițiilor Pilates este să îți dezvolți mușchii în armonie cu restul organismul fără a crea senzația că ridici greutăți două ore pe zi.</p>
    <p>Creste flexibilitate si echilibrul chiar si in cazul vârstnicilor</p>
    <p>In Pilates exercițiile fizice sunt sincronizate cu respirația și nimic nu este pe repede înainte. Întinderile, repetările și respirația susțin obținerea flexibilității. Exercițiile Pilates cresc flexibilitate, pun mușchii la treabă îmbunătățesc echilibrul și reduc riscul de cădere/accidentare.
    Pilates este pentru toată lumea așa că nu este de mirare că aceste exerciții au beneficii chiar și pentru vârstnici.</p>
    </div>
  )
}

const Poza2 = () => {
  return <img id="img2" src="sport-acasa.jpeg" alt="pilates" width="700" height="550"/>
  }

 const App = () => {
  return (
    <div class="align-center">
      <PilatesOnline/>
      <br/>
      <Poza1/>
      <TextSite/>
      <TextSite2/>
      <Poza2/>
    </div>
  );
 }

 export default App;