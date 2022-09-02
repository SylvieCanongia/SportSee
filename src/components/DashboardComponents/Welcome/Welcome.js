import './welcome.scss';

const Welcome = () => {
  return (
    <div className='welcome'>
      <p>Bonjour <span className='welcome__userName'>Thomas</span></p>
      <p className="welcome__congrats">Félicitations ! Vous avez explosé vos objectifs hier <span>&#128079;</span></p>
    </div>
  );
};

export default Welcome;