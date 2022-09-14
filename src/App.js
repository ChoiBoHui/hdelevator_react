import './App.css';

import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portfolio from './component/Portfolio';

const App = () => {
  return (
    <div className="Wrap">
      {/* <img src={process.env.PUBLIC_URL + 'assets/images/logo.png'} alt="" /> */}
      {/* 이미지 경로 연습 */}
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
