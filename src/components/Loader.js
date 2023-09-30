import React from 'react';
import { PacmanLoader} from 'react-spinners';

export const Loader = () => {

    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <PacmanLoader
        color={'#44d4b5'}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
}

