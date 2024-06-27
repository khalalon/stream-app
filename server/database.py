from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base;

# URL de connexion
DATABASE_URL = 'mysql+pymysql://root:7355608k@localhost/streaming_app'

# Créer une instance du moteur
<<<<<<< HEAD
engine = create_engine(DATABASE_URL,connect_args={"check_same_thread":False})
SessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)
=======
engine = create_engine(DATABASE_URL,connect_args={})
SessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)
Base = declarative_base()
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19

# Vérifier la connexion
try:
    connection = engine.connect()
    print("Connexion réussie à la base de données MySQL")
    connection.close()
except Exception as e:
    print(f"Erreur lors de la connexion à la base de données : {e}")