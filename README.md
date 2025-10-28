# Cyberstore 2077

## Prérequis

- Python 3.10+  
- Node.js 18+ et npm ou yarn  
- Base de données SQLite (par défaut)

---

## Backend (Django REST)
```bash
python -m venv venv
source venv/bin/activate  # Linux / macOS
venv\Scripts\activate     # Windows

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

### Super User pour administration
Nom : root
Mot de passe : root

(Si superuser manquant: python manage.py createsuperuser --username root --email root@example.com)
```
Backend disponible sur http://127.0.0.1:8000/api/
Interface admin disponible sur http://127.0.0.1:8000/admin/


## Frontend (React + Vite)
```bash
cd frontend

npm install

npm run dev
```


## Structure de fichiers
backend/
├─ products/
│  ├─ admin.py         # Enregistrement des modèles pour l'admin
│  ├─ models.py        # Définition des modèles Category et Product
│  ├─ serializers.py   # Sérializers pour l'API
│  ├─ urls.py          # URLs pour les routes produits et catégories
│  └─ views.py         # Viewsets pour l'API
├─ manage.py
└─ backend/
│  ├─ urls.py          # URLs principales (admin, API)
│  └─ settings.py      # Configuration globale, base de données, CORS
frontend/
├─ src/
│  ├─ components/
│  │  ├─ HomePage.jsx      # Page d'accueil
│  │  ├─ HomePage.css
│  │  ├─ CatalogPage.jsx   # Page catalogue + filtres
│  │  ├─ HomePage.css
│  │  ├─ ProductPage.jsx   # Détails d'un produit
│  │  ├─ HomePage.css
│  │  └─ Loader.jsx        # Composant d'affichage du chargement
│  ├─ App.jsx              # Composant principal avec routage interne
│  └─ App.css
├─ index.html
├─ package.json
└─ vite.config.js


