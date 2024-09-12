import { useState } from "react";
import Title from "./components/title"
import Card from "./components/Card";


function App() {
  const [username, setUsername] = useState("en ny tittle");
  const produkter = [
    {
      id: 1,
      title: 'CardTitle',
      description: 'CardDescription'
    },
    {
      id: 2,
      title: 'CardTitle2',
      description: 'CardDescription2'
    }
  ]

  return (
  <section>  
    {
      // Eksempel på looping gjennom liste og dynamisk opprette komponenter 
      produkter?.map(produkt => <Card key={produkt.id} title={produkt.title} desc={produkt.description} setUsername={setUsername} username={username} />)
    }
    {/*
      Eksempel på manuell opprettelse av komponenter
      <Title title = "Produkter"/>
      <Title title = "Medlemstilbud"/>
      <Card title = "Sko" desc = "Joggesko" />
      <Card title = "Sko2" desc = "Joggesko2" />
      */
    }
  </section>
  );
}


export default App
