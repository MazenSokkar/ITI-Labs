create database Courses_Info

use Courses_Info

create table Courses(
CID int primary key identity(1,1),
Cname nvarchar(50),
Duration nvarchar(50) unique
);

create table Labs(
LID int identity(1,1),
CID int,
Location nvarchar(50),
Capacity int,
constraint c1 primary key(LID, CID),
constraint c2 foreign key(CID) references Courses(CID) on delete cascade on update cascade,
constraint c3 check(Capacity < 20)
);

create table Instructors(
ID int identity (1,1),
First nvarchar(50),
Last nvarchar(50),
BD DateTime,
Age as year(getdate())-year(BD),
Salary decimal(18,2) default 3000,
overtime decimal(18,2) unique,
NetSalary as (isnull(salary,0)+isnull(overtime,0)) persisted,
Hiredate DateTime default getdate(),
Address nvarchar(50),
constraint c4 check(Address in ('Cairo','Alex')),
constraint c5 check(Salary between 1000 and 5000),
);

alter table Instructors add constraint c9 primary key(ID)

create table Course_Instructor(
CID int,
IID int,
constraint c6 primary key(CID, IID),
constraint c7 foreign key(CID) references Courses(CID) on delete cascade on update cascade,
constraint c8 foreign key(IID) references Instructors(ID) on delete cascade on update cascade,
);