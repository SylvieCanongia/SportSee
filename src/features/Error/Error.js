import { Link } from 'react-router-dom';
import './Error.scss';

/**
 * Feature Error - Displays the 404 error page
 * @module Error
 * @returns { HTMLElement } HTMLElement page 404
 */
const Error = () => {
  return (
    <div className='error'>
      <h1 className="errorTitle">404</h1>
      <p className="errorText">Oups ! La page que vous demandez n'existe pas.</p>
      <Link to='/' className='errorHomeLink'>Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;