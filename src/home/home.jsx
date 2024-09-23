import { useState } from "react";
import Header from "../components/header/header";
import MainSection from "../components/mainSection/mainSection";

function Home() {
  const [searchInput, setSearchInput] = useState('') 

  function searchActive(event){
    console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  return (
    <>
      <Header searchActive={searchActive} />
      <MainSection searchInput={searchInput} />
    </>
  );
}

export default Home;
