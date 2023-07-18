import React, { useEffect, useState } from 'react';
import './App.css';
import { AggregatedPart } from './types/parts.type';


function App() {
  const partNumber = '0510210200';
  const [partsData, setPartsData] = useState<AggregatedPart[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3080/v1/parts?partNumber=${partNumber}}`)
      .then(res => res.json())
      .then(data => setPartsData(data))
      .catch(err => console.error(`Failed to fetch parts data ${err}`));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parts Data</h1>
        <div className="table-container">
          <table>
            <tr>
              <th>Part Name</th>
              <th>Description</th>
              <th>Total Stock</th>
              <th>Shortest Lead Time (Days)</th>
              <th>Datasheet URL</th>
              <th>Product URL</th>
              <th>Product Image URL</th>
            </tr>
            {partsData ? (
              partsData.map((part, index) => (
                <tr key={index}>
                  <td>{part.name}</td>
                  <td>{part.description}</td>
                  <td>{part.totalStock}</td>
                  <td>{part.manufacturerLeadTime}</td>
                  <td><a href={part.productDoc} target='_blank' rel="noreferrer">{part.productDoc}</a></td>
                  <td><a href={part.productUrl} target='_blank' rel="noreferrer">{part.productUrl}</a></td>
                  <td><a href={part.productImageUrl} target='_blank' rel="noreferrer">{part.productImageUrl}</a></td>
                  {/* ...whatever data we want */}
                </tr>
              ))
            ) : (
              <p>Loading parts data...</p>
            )}
          </table>
        </div>
      </header>

    </div>
  );
}

export default App;
