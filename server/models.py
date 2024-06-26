from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float
from database import engine

class User(Base):
    __tablename__= "users"

    id = Column(Integer,primary_key=True,index=True)
    username = Column(String(20), unique=True, index=True)  # Adjust the length as needed
    email = Column(String(50), unique=True, index=True)
    hashed_password = Column(String(255))

#Create the database tables if they don't exist

User.metadata.create_all(bind=engine)
     
    