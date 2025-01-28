import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './App.css';

const ONE_SECOND = 1000;
const ONE_MINUTE = 60;
const ONE_HOUR = 60;
const ONE_DAY = 24;
const WHATSAPP_BASE_URL = 'https://wa.me';
const FELIPPE_PHONE = '5537991564147';
const DENGO_MESSAGE =
  'Oi, Tchuco! Tudo bem? Queria saber se você quer me dar vários beijinhos?';
const WHATSAPP_FORMATTED_LINK = `${WHATSAPP_BASE_URL}/${FELIPPE_PHONE}?text=${DENGO_MESSAGE}`;

function App() {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const targetTime = dayjs('2025-02-08');

  const remainingDays = targetTime.diff(currentTime, 'day');
  const remainingHours = targetTime.diff(currentTime, 'hour') % ONE_DAY;
  const remainingMinutes = targetTime.diff(currentTime, 'minute') % ONE_HOUR;
  const remainingSeconds = targetTime.diff(currentTime, 'second') % ONE_MINUTE;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <img style={{ height: 80 }} src="/favicon.ico" alt="Gatinho" />
      </div>
      <h2>Quanto tempo até ver a Vick?</h2>
      <h2>Faltam:</h2>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBlockStart: 0,
          marginBlockEnd: 0,
        }}
      >
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 16,
          }}
        >
          <h2>{remainingDays}</h2> dias
        </p>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 16,
          }}
        >
          <h2>{remainingHours}</h2> horas
        </p>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 16,
          }}
        >
          <h2>{remainingMinutes}</h2> minutos
        </p>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 16,
          }}
        >
          <h2>{remainingSeconds}</h2> segundos
        </p>
        <a
          href={WHATSAPP_FORMATTED_LINK}
          target="_blank"
          style={{
            borderRadius: 8,
            padding: 16,
            backgroundColor: 'red',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Fazer dengo
        </a>
      </span>
    </>
  );
}

export default App;
