import React, { useEffect, useState } from 'react';
import './Documentation.scss';
import { getApis } from '../../services/apiService';
import Card from '../Card/Card';

const Documentation = () => {
  const [apis, setApis] = useState(null);

  useEffect(() => {
    (async () => {
      console.log('hi');
      const res = await getApis();
      console.log('apiservice', res);
      setApis(res);
    })();
  }, []);

  return (
    <div className="documentation-container">
      <div className="page-description">
        <h2>APIs &amp; Services</h2>
        <p>Access information on how to use Forge APIs and Services</p>
      </div>
      <div className="cards-section">
        {apis &&
          apis.map((api) => (
            <div className="card-wrapper">
              <Card content={api} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Documentation;
