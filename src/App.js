import './App.css';

import Header from './component/Header';
import MainVisual from './component/MainVisual';

const App = () => {
  return (
    <div className="Wrap">
      {/* <img src={process.env.PUBLIC_URL + 'assets/images/logo.png'} alt="" /> */}
      {/* 이미지 경로 연습 */}
      <Header />
      <MainVisual />
    </div>
  );
}

export default App;
