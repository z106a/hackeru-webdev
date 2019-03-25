import React, { useState, useEffect } from 'react';
import Row from './Row';

function App() {
  const [name, setName] = useState('Marry');

  // const [surname, setSurname] = useState('Poppins');
  const surname = useFormInput('Poppins')
  // useDocumentTitle(name + ' ' +surname);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  // function handleSurnameChange(e) {
  //   setSurname(e.target.value);
  // }
  // cDM, cDU
  useEffect(() => {
    document.title = name + ' ' +surname.value;
  }, [name, surname]);
  const width = useWindowWidth();
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }
  // });
  return (
    <section>
      <Row label="Name">
        <input 
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Width">
        {width}
      </Row>
    </section>    
  );

}
// customHooks should started with 'use'
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  return width;
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useFormInput(intitialValue) {
  const [value, setValue] = useState(intitialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
// constructor()
// state ={
// name: 'Marry',
//   width: window.innerWidth
// }
// componentDidUpdate() {
//   window.title = ''
// }
// componentDidMount() {
//   window.title = ''
  //window.addEventListener('resize', this.handleResize);
  // componentWillUnmount() {
  //     //window.removeEventListener('resize', this.handleResize);
  // }
// }
// handleResize() {
//   this.setState({width: window.innerWidth})
// }
export default App;
