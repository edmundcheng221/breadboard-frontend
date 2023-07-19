import React, { useEffect, useState } from 'react';
import './App.css';
import { AggregatedPart } from './types/parts.type';


function App() {
  const partNumber = '0510210200'.replace(/^0+|\D/g, '');
  const [partsData, setPartsData] = useState<AggregatedPart | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3080/v1/parts?partNumber=${partNumber}}`)
      .then(res => res.json())
      .then(data => setPartsData(data))
      .catch(err => console.error(`Failed to fetch parts data ${err}`));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aggregated Parts Data for {partNumber}</h1>
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
                <tr>
                  <td>{partsData.name}</td>
                  <td>{partsData.description}</td>
                  <td>{partsData.totalStock}</td>
                  <td>{partsData.manufacturerLeadTime}</td>
                  <td><a href={partsData.productDoc} target='_blank' rel="noreferrer">{partsData.productDoc}</a></td>
                  <td><a href={partsData.productUrl} target='_blank' rel="noreferrer">{partsData.productUrl}</a></td>
                  <td><a href={partsData.productImageUrl} target='_blank' rel="noreferrer">{partsData.productImageUrl}</a></td>
                  {/* ...whatever data we want */}
                </tr>
            ) : (
              <p className='loading'>Loading parts data...</p>
            )}
          </table>
        </div>
      </header>

    </div>
  );
}

export default App;
