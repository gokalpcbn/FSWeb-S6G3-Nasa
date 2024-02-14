import React, { useState, useEffect } from "react";
import "./App.css";

import ApodComponent from "./Apod"; // Apod VERİLERİ
import ApiObj from "./fetchedApi"; // API VERİLERİ

const App = () => {
  const [apodData, setAPODdata] = useState();

  useEffect(async () => {
    // todo get data from api
    const fetchData = await ApiObj.fetchData(61);
    setAPODdata(fetchData);
  }, []); // bu sonda boş array verilmesi useEffect'in companent yüklendiği zaman bir kere çalışmasını sağlıyor

  return (
    <div className="App">
      {apodData ? (
        apodData.map((item, index) => (
          <ApodComponent key={index} apodData={item} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
