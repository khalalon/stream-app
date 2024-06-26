from typing import Union
from fastapi import FastAPI, Depends,HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from datetime import datetime,timedelta
from passlib.context import CryptContext
from models import User
from database import SessionLocal,engine
from pydantic import BaseModel,EmailStr
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins =["http://localhost:3000",
          
          "http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials=True,
    allow_methods = ["*"],
    allow_headers =["*"],


)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


pwd_context = CryptContext(schemes=["bcrypt"],deprecated="auto")
SECRET_KEY = "7355608"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    confirmpassword: str

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username== username).first()

def create_user(db: Session, user: UserCreate):
    if user.password != user.confirmpassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    hashed_password = pwd_context.hash(user.password)
    db_user = User(username=user.username, email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    return "User registration complete"




@app.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return create_user(db=db, user=user)

#Authenticate the user
def authenticate_user(username: str, password: str, db: Session): 
    user = db.query(User).filter(User.username == username).first() 
    if not user:
        return False
    if not pwd_context.verify(password, user.hashed_password):
        return False
    return user

from datetime import datetime, timedelta, timezone

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@app.post("/token")
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/verify-token/{token}")
async def verify_user_token(token: str):
    verify_token(token=token)
    return {"message": "Token is valid"}

from jose import JWTError, jwt

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")



