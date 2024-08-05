import './components/LoginPage.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
