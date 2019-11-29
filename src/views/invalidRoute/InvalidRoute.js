import React from 'react';

import DaohausLogo from '../../assets/daohaus__logo--white.png';
import HeroBackground from '../../assets/daohaus__hero--falling.png';
import Brand from '../../assets/Pokemol__Logo.png';

const InvalidRoute = () => (
  <div className="Row InvalidRoute">
    <div className="Column Column--50 Info Info--Pokemol">
      <div className="Contents">
        <img src={Brand} />
        <h2>Put a Moloch in Your Pocket</h2>
        <p>Pokemol is a mobile-first frontend for Moloch daos. If a dao was summoned on DAOHaus, you can view, submit and vote on proposals here.</p>
        <p>Example URL:</p>
        <pre>https://pokemol.com/dao/{'{dao contract address}'}</pre>
      </div>
    </div>
    <div className="Column Column--50 Info Info--Daohaus">
      <div className="Contents">
        <img src={DaohausLogo} />
        <h2>Looking for a Dao?</h2>
        <p>Discover and pledge to existing Moloch daos, or Summon your own.</p>
        <a className="BigLink" href="https://daohaus.club/">
          Go to DAOHaus ->
        </a>
      </div>
    </div>
  </div>
);

export default InvalidRoute;
