# File name: database.py
# Auth: Benjamin Willför/TerminalSwagDisorder
# Desc: File currently in development containing code for creating a database

import os
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import ColumnClause
from sqlalchemy.sql import table, column, select, update, insert, delete, text
from sqlalchemy.ext.declarative import declarative_base

def create_database():
	# Create database folder if it does not exist
	fPath = os.path.abspath(os.path.realpath(__file__))
	dPath = os.path.dirname(fPath)
	finPath = dPath + "\\database"

	if not os.path.exists(finPath):
		os.makedirs(finPath)

	engine = create_engine("sqlite:///" + finPath + "\\expense_data.db", echo=True, pool_pre_ping=True)
	Session = sessionmaker(bind=engine)
	session = Session()

	# Define metadata information
	metadata = MetaData()
	
	return engine, session, metadata

engine, session, metadata = create_database()


Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    __table_args__ = (
        Column('ID', INTEGER, primary_key=True, autoincrement=True),
        Column('Name', TEXT)
    )
	
class Car(User):
    __tablename__ = 'car'
    __table_args__ = (
        Column('ID', INTEGER, primary_key=True, autoincrement=True),
        Column('UID', INTEGER, ForeignKey('user.ID')),
        Column('Manufacturer', TEXT),
        Column('Model', TEXT),
		Column('Tank', FLOAT),
		Column('Battery', FLOAT),
		Column('Is Electric', BOOLEAN)
    )
	
class MileagePrices(Car):
    __tablename__ = 'prices'
    __table_args__ = (
        Column('ID', INTEGER, primary_key=True, autoincrement=True),
        Column('CID', INTEGER, ForeignKey('car.ID')),
        Column('Total filled', FLOAT),
        Column('Total price', FLOAT)
    )
	
Base.metadata.create_all(engine)
