import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button className="btn btn-primary">I'm a button</button>
  );
}

function ProfileCard({ name, designation }){
  return (
    <div className="col-4">
    <div className="card">
      <img src="https://ca.slack-edge.com/T024FLV32-U01C098LKJQ-a5a97d31e847-192" class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <span>{designation}</span>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">プロファイルを表示</a>
      </div>
    </div>
    </div>
  );
}

function App() {
  return (
    <div className='container'>
      <h1 className='text-center mt-5'>開発者の自己紹介</h1>
      <div className="row">
      <ProfileCard name="アシフ・マリク" designation="IT エンジニア" />
      <ProfileCard name="Asif Malik" designation="IT Engineer" />
      </div>
      
    </div>
  );
}

export default App;
