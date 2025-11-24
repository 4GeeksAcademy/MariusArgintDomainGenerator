const www = ['www'];
const pronoun = ['the', 'our', 'my', 'your', 'his'];
const adj = ['great', 'big', 'wild', 'cool', 'epic'];
const noun = ['jogger', 'racoon', 'coder', 'ninja', 'pirate'];
const tld = ['.com', '.es', '.net', '.io', '.org'];

function generateAllDomains() {
    const domainListDiv = document.getElementById('domainList');
    const counterDiv = document.getElementById('counter');
    
    domainListDiv.innerHTML = '';
    counterDiv.innerHTML = '';
    
    let allDomains = [];
    
    for (let i = 0; i < www.length; i++) {
        for (let j = 0; j < pronoun.length; j++) {
            for (let k = 0; k < adj.length; k++) {
                for (let l = 0; l < noun.length; l++) {
                    for (let m = 0; m < tld.length; m++) {
                        const domain = www[i] + '.' + pronoun[j] + adj[k] + noun[l] + tld[m];
                        allDomains.push(domain);
                    }
                }
            }
        }
    }
    //in collaboration with Claude // 
    counterDiv.textContent = 'Total domains generated: ' + allDomains.length;
    
    for (let i = 0; i < allDomains.length; i++) {
        const domainDiv = document.createElement('div');
        domainDiv.className = 'domain-item';
        domainDiv.textContent = allDomains[i];
        domainListDiv.appendChild(domainDiv);
    }
    
    console.log('All domains:', allDomains);
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('generateBtn');
    button.addEventListener('click', generateAllDomains);
});
