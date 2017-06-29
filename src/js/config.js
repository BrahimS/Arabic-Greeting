// Config file
const name = 'Brahim';
export default name;

// Set up the watch function
 const setDate = () => {
  const secondNeedle = document.querySelector('.second-needle');
  const minNeedle = document.querySelector('.min-needle');
  const hourNeedle = document.querySelector('.hour-needle');
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60 * 360 + 90);
  secondNeedle.style.transform = `rotate(${secondsDegrees}deg)`;
  if (secondNeedle.style.transform === 'rotate(444deg)') {
    secondNeedle.style.transition = 'none';
  }
  const min = now.getMinutes();
  const minDegrees = (min / 60 * 360 + 90);
  minNeedle.style.transform = `rotate(${minDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = (hour / 12 * 360 + 90);
  hourNeedle.style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(setDate, 1000);
