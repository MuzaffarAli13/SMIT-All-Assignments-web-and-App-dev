import * as React from 'react';
import { Button } from './components/Button';

const navlinks = {
  home: "Home",
  about: "About",
  contact: "Contact Us",
};

export const Header = () => {
  return (
    <main>
      {/* header */}
      <div  className='container '>
        {/* logo */}
        <div>
          <img src="/logo.svg" alt="logo" width={100} height={100} />
        </div>

        {/* links */}
       <div className='links'>
        {
        Object.entries(navlinks).map(([key,val])=>{
         return(
          <div key={key}>
           <a href={`/${key}`}>{val}</a>
          </div>
         )
        })
       }
       </div>
      </div>
      {/* hero */}
      <div className='hero'>
        {/* left */}
        <h2>React App</h2>
        <img src="/logo.svg" alt="logo" width={200} height={200} />
        <div>
           <Button title="get Started"/>
        </div>
      </div>
      
    </main>
  );
};
