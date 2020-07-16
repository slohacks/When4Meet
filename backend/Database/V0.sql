drop database if exists W4MDB;
create database W4MDB;
use W4MDB;

create table Meeting (
   id int auto_increment primary key,
   name varchar(50),
   startTime varchar(30),
   endTime varchar(30),
   timezone varchar(30),
   isReoccuring BOOLEAN,
   isOneTime BOOLEAN,
   days TEXT
);

create table Availability (
   id int auto_increment primary key,
   meetingId int,
   ownerName varchar(50),
   times TEXT
);