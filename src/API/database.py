# File name: database.py
# Auth: Benjamin Willför/TerminalSwagDisorder
# Desc: File currently in development containing code for creating a database

from pathlib import Path
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import ColumnClause
from sqlalchemy.sql import table, column, select, update, insert, delete, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.sqlite import *


def create_database():
	# Create database folder if it does not exist
	fPath = Path(__file__).resolve()
	dPath = fPath.parent
	finPath = dPath.joinpath("database")

	if not finPath.exists():
		finPath.mkdir()

	engine = create_engine("sqlite:///" + str(finPath.joinpath("expense_tracker.db")), echo=True, pool_pre_ping=True)
	Session = sessionmaker(bind=engine)
	session = Session()

	# Define metadata information
	metadata = MetaData()

	return engine, session, metadata

engine, session, metadata = create_database()



Base = declarative_base()

class User(Base):
	__tablename__ = "user"
	__table_args__ = (
		Column("ID", INTEGER, primary_key = True, autoincrement = True),
		Column("Name", TEXT),
		Column("Email", TEXT, unique = True, sqlite_on_conflict_unique = "IGNORE"),
		Column("Password", TEXT)
	)

class Car(User):	
	__tablename__ = "car"
	__table_args__ = (
		Column("ID", INTEGER, primary_key = True, autoincrement = True),
		Column("UID", INTEGER, ForeignKey("user.ID")),
		Column("Manufacturer", TEXT),
		Column("Model", TEXT),
		Column("Tank", FLOAT),
		Column("Battery", FLOAT),
		Column("Is_Electric", BOOLEAN)
	)

class MileagePrices(Car):
	__tablename__ = "prices"
	__table_args__ = (
		Column("ID", INTEGER, primary_key = True, autoincrement = True),
		Column("CID", INTEGER, ForeignKey("car.ID"), unique = True, sqlite_on_conflict_unique = "IGNORE"),
		Column("Total_filled", FLOAT),
		Column("Total_price", FLOAT),
		Column("Total_distance", FLOAT)
	)

Base.metadata.create_all(engine)

def add_data():
	# Add some default data
	users = [
		{"Name": "Testuser1", "Email": "user1@email.com", "Password": "password123"},
		{"Name": "User for testing 2", "Email": "user2@email.com", "Password": "asdasd"},
		{"Name": "Bruh", "Email": "bruh@email.com", "Password": "qewweqe"},
		{"Name": "Benjamin", "Email": "benjamin@email.com", "Password": "asdsdasdasd3123"}
	]

	for data in users:
		i = insert(User).values(data)
		session.execute(i)

	session.commit()


	cars = [
		{"UID": 1, "Manufacturer": "Toyota", "Model": "Corolla", "Tank": 50, "Battery": 0, "Is_Electric": False},
		{"UID": 2, "Manufacturer": "Honda", "Model": "Civic", "Tank": 45, "Battery": 0, "Is_Electric": False},
		{"UID": 3, "Manufacturer": "Tesla", "Model": "Model S", "Tank": 0, "Battery": 100, "Is_Electric": True},
		{"UID": 3, "Manufacturer": "Super", "Model": "Car", "Tank": 100, "Battery": 0, "Is_Electric": False}
	]

	for data in cars:
		i = insert(Car).values(data)
		session.execute(i)

	session.commit()

	mileage_prices = [
		{"CID": 1, "Total_filled": 30, "Total_price": 50, "Total_distance": 500},
		{"CID": 2, "Total_filled": 20, "Total_price": 40, "Total_distance": 300},
		{"CID": 3, "Total_filled": 0, "Total_price": 0, "Total_distance": 0},
		{"CID": 4, "Total_filled": 9001, "Total_price": 1000, "Total_distance": 10000}
	]

	for data in mileage_prices:
		i = insert(MileagePrices).values(data)
		session.execute(i)

	session.commit()


add_data()