import logo from './logo.svg';
import './App.css';
import HackInHere from './HackInHere';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Happy HacktoberFest 2021!</h1>
        <br/>
        <h3>Hi there - my name is Jade and I am the maintainer of this project.</h3>
        <p>Our task is to build an application which can be used during squad retros.</p>
        <p>If you haven't taken part in a retro before, then it is somewhere you can discuss how you felt about your last project or sprint.</p>
        <p>With a lot of companies going remote we need an online tool to use for this.</p>
        <p>So let's build one.</p>
        <p>You have the freedom to build whatever you want to add to this project. It can be big or small. What do you think it needs?</p>
      <h3>Where do I make changes?</h3>
        <p>Make your changes in the HackInHere.js file <b>not</b> App.js</p>
        <p>These changes will appear in the box below:</p>
        </header>
      <HackInHere/>
    </div>
  );
}

export default App;
