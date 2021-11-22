// Random number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;

// The while loop
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('The loop is about to end...');
}
