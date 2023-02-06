import CardItems from './CardItems';

function App() {
  return (
    <div className="App">
      {/* app inside card items component */}
      {/* to pass props to components we directly pass property in component tag */}
     <CardItems title="phone" price="999" quantity= "1" />
     <CardItems title="I phone" price="599" quantity= "0" />
    </div>
  );
}

export default App;
