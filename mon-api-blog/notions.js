// ==============================================================================
// notions.js
// Vérification interactive des notions JavaScript abordées dans le guide
// Lancer avec : node notions.js
// ==============================================================================

console.log('=== 1. Fonction fléchée (Étape 2) ===');
function saluerClassique(nom) { return 'Bonjour ' + nom; }
const saluerFlechee = (nom) => 'Bonjour ' + nom;
console.log('Classique :', saluerClassique('Aya'));
console.log('Fléchée   :', saluerFlechee('Aya'));

console.log('\n=== 2. Template literals (Étape 2) ===');
const PORT = 3000;
console.log(`Serveur disponible sur http://localhost:${PORT}`);

console.log('\n=== 3. Méthode find() et conversion d\'ID (Étape 4) ===');
const articlesTest = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' }
];
const idRecherche = '2'; // vient de req.params.id (string)
console.log('Comparaison stricte sans conversion ("2" === 2) :', idRecherche === 2); // false !
console.log('Comparaison avec Number(id) :', Number(idRecherche) === 2); // true !
const trouve = articlesTest.find(a => a.id === Number(idRecherche));
console.log('Article trouvé :', trouve);

console.log('\n=== 4. Déstructuration d\'objet (Étape 5 & 6) ===');
const queryParams = { author: 'Aya', limit: 10 };
const { author } = queryParams;
console.log('Auteur extrait :', author);

console.log('\n=== 5. Méthode filter() (Étape 5) ===');
const articlesMultiples = [
  { id: 1, title: 'Intro', author: 'Admin' },
  { id: 2, title: 'Express', author: 'Aya' },
  { id: 3, title: 'Postman', author: 'Aya' }
];
const articlesAya = articlesMultiples.filter(a => a.author === 'Aya');
console.log('Articles d\'Aya :', articlesAya);

console.log('\n=== 6. Architecture SoC & CommonJS (Étape 8 à 11) ===');
console.log('Export : module.exports = { getAllArticles, ... }');
console.log('Import : const articleRoutes = require("./routes/articleRoutes");');
console.log('\nToutes les notions fonctionnent parfaitement !');
