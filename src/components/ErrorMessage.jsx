import { useNavigate } from 'react-router-dom';
import Button from './Button';

function ErrorMessage({ errorMessage }) {
  const navigate = useNavigate();

  return (
    <div className="error-message">
      <p>{errorMessage}</p>

      <Button
        styleType="btn btn__primary"
        onclick={() => navigate('/projects')}
      >
        Try Again
      </Button>
    </div>
  );
}

export default ErrorMessage;
