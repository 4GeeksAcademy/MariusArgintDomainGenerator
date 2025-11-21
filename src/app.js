const www = ['www'];
const pronoun = ['the', 'our', 'my', 'your', 'his'];
const adj = ['great', 'big', 'wild', 'cool', 'epic'];
const noun = ['jogger', 'racoon', 'coder', 'ninja', 'pirate'];
const tld = ['.com', '.es', '.net', '.io', '.org']; // domain endings

// Generate ALL possible combinations (like in the image, with nested for)
for (let i = 0; i < www.length; i++) {
  for (let j = 0; j < pronoun.length; j++) {
    for (let k = 0; k < adj.length; k++) {
      for (let l = 0; l < noun.length; l++) {
        for (let m = 0; m < tld.length; m++) {
          console.log(
            `${www[i]}.${pronoun[j]}${adj[k]}${noun[l]}${tld[m]}`
          );
        }
      }
    }
  }
}
