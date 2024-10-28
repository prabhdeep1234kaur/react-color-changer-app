import { useState } from 'react';
import { Box } from './Box';
import AddColor from './AddColor';

function App() {

  const[color, setColor] = useState(localStorage.getItem('ColorBox'));


  return (
    <main>
      <Box 
        color = {color}
      />
      <AddColor 
        color={color}
        setColor={setColor}
      />
    </main>
  );
}

export default App;
