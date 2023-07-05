import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button className="btn btn-primary">I'm a button</button>
  );
}

function ProfileCard(){
  return (
    <div className="card">
      <img src="https://ca.slack-edge.com/T024FLV32-U01C098LKJQ-a5a97d31e847-192" class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">アシフ・マリク</h5>
        <span>ITエンジニア</span>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">プロファイルを表示</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='container'>
      <h1 className='text-center mt-5'>開発者の自己紹介</h1>
      <ProfileCard />
    </div>
  );
}

export default App;
