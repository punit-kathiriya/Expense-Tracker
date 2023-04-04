# File name: database.py
# Auth: Benjamin Willför/TerminalSwagDisorder
# Desc: File currently in development containing code for creating a database

import os
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import ColumnClause
from sqlalchemy.sql import table, column, select, update, insert, delete, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.sqlite import *

def create_database():
	# Create database folder if it does not exist
	fPath = os.path.abspath(os.path.realpath(__file__))
	dPath = os.path.dirname(fPath)
	finPath = dPath + "\\database"

	if not os.path.exists(finPath):
		os.makedirs(finPath)

	engine = create_engine("sqlite:///" + finPath + "\\expense_data.db", echo = True, pool_pre_ping = True)
	Session = sessionmaker(bind = engine)
	session = Session()

	# Define metadata information
	metadata = MetaData()

	return engine, session, metadata


def add_data():
	# Add some default data
	Session = sessionmaker(bind = engine)
	session = Session()

	users = [
		User(Name = "Testuser1", Email = "user1@email.com", Password = "password123"),
		User(Name = "User for testing 2", Email = "user2@email.com", Password = "asdasd"),
		User(Name = "Bruh", Email = "bruh@email.com", Password = "qewweqe"),
		User(Name = "Benjamin", Email = "benjamin@email.com", Password = "asdsdasdasd3123")
	]
	for user in users:
		session.add(user)
		session.commit()


	cars = [
		Car(UID = 1, Manufacturer = "Toyota", Model = "Corolla", Tank = 50, Battery = 0, Is_Electric = False),
		Car(UID = 2, Manufacturer = "Honda", Model = "Civic", Tank = 45, Battery = 0, Is_Electric = False),
		Car(UID = 3, Manufacturer = "Tesla", Model = "Model S", Tank = 0, Battery = 100, Is_Electric = True),
		Car(UID = 3, Manufacturer = "Super", Model = "Car", Tank = 100, Battery = 0, Is_Electric = False)
	]
	for car in cars:
		session.add(car)
		session.commit()

	mileage_prices = [
		MileagePrices(CID = 1, Total_filled = 30, Total_price = 50, Total_distance = 500),
		MileagePrices(CID = 2, Total_filled = 20, Total_price = 40, Total_distance = 300),
		MileagePrices(CID = 3, Total_filled = 0, Total_price = 0, Total_distance = 0),
		MileagePrices(CID = 4, Total_filled = 9001, Total_price = 1000, Total_distance = 10000)
	]

	for price in mileage_prices:
		session.add(price)
		session.commit()


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

add_data()