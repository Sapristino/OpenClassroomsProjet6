const path = require('path');
const express = require('express');
const cors = require('cors'); // Assurez-vous que c'est bien importé
const app = express();
const mongoose = require('mongoose');

// Importez vos routes
const booksRoutes = require('./routes/books');
const userRoutes = require('./routes/user');

// Connexion à MongoDB
mongoose.connect('mongodb+srv://traccardb:BOC3igGv7tBWV0Q5@ocprojet6.2orhlck.mongodb.net/')
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Activation du middleware CORS pour toutes les requêtes
app.use(cors());

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Définition des routes
app.use('/api/books', booksRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;