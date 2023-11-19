import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../App';

function Mute() {
  const user = useContext(UserContext);

  return (
    <button className='mute' onClick={() => user.setMute(!user.mute)}>
      <FontAwesomeIcon icon={user.mute ? faVolumeXmark : faVolumeHigh} />
    </button>
  );
}

export default Mute;
