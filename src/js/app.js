// Import style
import '../sass/index.sass';
// Import Js module
import name from '../js/config';

// Import the watch function
import { setDate } from '../js/config';

const add = (a, b) => a + b;
/* eslint-disable no-console */
console.log(add(14, 20));
export default add;

/* eslint-disable no-console */
console.log(name);


function timeForGreeting() {
  const greeting = () => {
    const time = new Date();
    const whatTimeIsIt = time.getHours();
    let hello;

    const bodY = document.querySelector('body');
    if (whatTimeIsIt > 18) {
      hello = 'مساء الخير '; // Good evening
      bodY.classList.add('evening');
      bodY.style.backgroundColor = '#444444';
    } else if (whatTimeIsIt > 12) {
      hello = 'السلام  عليكم'; // Good afternoon
      bodY.classList.add('hellooo');
    } else if (whatTimeIsIt > 6) {
      hello = 'صباح الخير '; // Good morning
      bodY.classList.add('morning');
      bodY.style.backgroundColor = '#A0E4B5';
    } else {
      hello = 'السلام  عليكم'; // Hi
      bodY.classList.add('hellooo');
      bodY.style.backgroundColor = 'tomato';
    }
    document.write(
      `
        <div id="hello">
          <h1 class="printedGreeting"> ${hello} </h1>
        </div>
      `,
    );
  };
  greeting();
}
timeForGreeting();
