import React, { useEffect, useState } from 'react';
import './Documentation.scss';
import { getApis } from '../../services/apiService';
import Card from '../Card/Card';
import Loader from '../../images/loader.gif';

// To emulate pagination from backend
let page = 1;

const Documentation = () => {
  const [apis, setApis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight || document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    if (windowHeight + window.pageYOffset >= documentHeight) {
      setLoading(true);
      (async () => {
        // Increment the page number and make AJAX call to fetch new page
        page = page + 1;
        const res = await getApis(page);
        setApis((current) => {
          if (current) return [...current, ...res];
        });
        setLoading(false);
      })();
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getApis();
      setApis(res);
    })();

    window.addEventListener('scroll', handleScroll, false);
  }, []);

  return (
    <div className={`documentation-container ${apis ? 'documentation-bg' : ''}`}>
      <div className="page-description">
        <h2>APIs &amp; Services</h2>
        <p>Access information on how to use Forge APIs and Services</p>
      </div>
      <div className="cards-section">
        {apis ? (
          apis.map((api, i) => (
            <div className="card-wrapper" key={i}>
              <Card content={api} />
            </div>
          ))
        ) : (
          <div className="loader-wrapper">
            <img src={Loader} alt="loader" />
          </div>
        )}
      </div>
      {loading && (
        <div className="loader-wrapper">
          <img src={Loader} alt="loader" />
        </div>
      )}
    </div>
  );
};

export default Documentation;
