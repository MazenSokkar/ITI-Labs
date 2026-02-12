use Company_SD

/* 1. Display (Using Union Function)
	a. The name and the gender of the dependence that's gender is Female and
		depending on Female Employee.
	b. And the male dependence that depends on Male Employee. */
select d.Dependent_name, d.Sex
from Dependent as d inner join Employee as e
on d.ESSN = e.SSN and e.Sex = 'F' and d.Sex = 'F'
union all
select d.Dependent_name, d.Sex
from Dependent as d inner join Employee as e
on d.ESSN = e.SSN and e.Sex = 'M' and d.Sex = 'M'

/* 2. For each project, list the project name and the total hours per week (for all
employees) spent on that project. */
select p.Pname, sum(w.Hours) as TotalHours
from Project as p inner join Works_for as w
on p.Pnumber = w.Pno
group by p.Pname;

/* 3. Display the data of the department which has the smallest employee ID over all
employees' ID. */
-- sol 1
select * from Departments
where Dnum = (select Dno from Employee 
				where SSN = (select min(SSN) from Employee) )
-- sol 2
select top 1  d.*
from Employee as e inner join Departments as d
on e.Dno = d.Dnum
order by e.SSN asc;

/* 4. For each department, retrieve the department name and the maximum, minimum and
average salary of its employees. */
select d.Dname, max(e.Salary) as MaxSal, min(e.Salary) as MinSal, avg(e.Salary) as AvgSal
from Employee as e inner join Departments as d
on e.Dno = d.Dnum
group by d.Dname;

/* 5. List the full name of all managers who have no dependents. */
select m.Fname + ' ' + m.Lname as FullName
from Employee as e inner join Employee as m
on m.SSN = e.Superssn
where m.SSN not in (select distinct d.ESSN from Dependent as d inner join Employee as e1 on e1.SSN = d.ESSN);

/* 6. For each department-- if its average salary is less than the average salary of all
employees-- display its number, name and number of its employees. */
select d.Dnum, d.Dname, count(e.SSN) as EmpNums
from Departments as d inner join Employee as e
on d.Dnum = e.Dno
group by d.Dnum,d.Dname
having avg(e.Salary) < (select avg(Salary) from Employee)

/* 7. Retrieve a list of employee’s names and the projects names they are working on
ordered by department number and within each department, ordered alphabetically by
last name, first name. */
select p.Dnum, e.Fname, e.Lname, p.Pname
from Employee as e inner join Works_for as w
on e.SSN = w.ESSn
inner join Project as p
on p.Pnumber = w.Pno
order by p.Dnum, e.Fname, e.Lname;

/* 8. Try to get the max 2 salaries using sub query */
select max(Salary) as Max2Sal from Employee
union all
select max(Salary) from Employee
where Salary < (select max(Salary) from Employee)

/* 9. Get the full name of employees that is similar to any dependent name */
select Fname + ' ' + Lname as FullName from Employee
intersect
select Dependent_name from Dependent

/* 10. Display the employee number and name if at least one of them have dependents (use
exists keyword) self-study. */
select SSN, Fname + ' ' + Lname as FullName from Employee
where exists(select ESSN from Dependent where SSN = ESSN);

/* 11. In the department table insert new department called "DEPT IT”, with id 100,
employee with SSN = 112233 as a manager for this department. The start date for this
manager is '1-11-2006' */
insert into Departments values('DEPT IT', 100, 112233, 2006-11-01);

/* 12. Do what is required if you know that : Mrs.Noha Mohamed(SSN=968574) moved to
be the manager of the new department (id = 100), and they give you(your SSN
=102672) her position (Dept. 20 manager)
	a. First try to update her record in the department table
	b. Update your record to be department 20 manager.
	c. Update the data of employee number=102660 to be in your teamwork (he will
		be supervised by you) (your SSN =102672) */
update Employee set Dno = 100 where SSN = 968574;
update Departments set MGRSSN = 968574 where Dnum = 100;
update Employee set Dno = 20 where SSN = 102672;
update Departments set MGRSSN = 102672 where Dnum = 20;
update Employee set Dno = 20 where SSN = 102660;
update Employee set Superssn = 102672 where SSN = 102660;

/* 13. Unfortunately the company ended the contract with Mr. Kamel Mohamed
(SSN=223344) so try to delete his data from your database in case you know that you
will be temporarily in his position.
Hint: (Check if Mr. Kamel has dependents, works as a department manager, supervises
any employees or works in any projects and handle these cases). */
update Departments set MGRSSN = 102672 where MGRSSN = 223344;
update Employee set Superssn = 102672 where Superssn = 223344;
update Works_for set ESSn = 102672 where ESSn = 223344;
delete from Dependent where ESSN = 223344;
delete from Employee where SSN = 223344;

/* 14. Try to update all salaries of employees who work in Project ‘Al Rabwah’ by 30% */
update e set e.Salary = e.Salary + e.Salary*0.3
from Employee as e inner join Works_for as w 
on e.SSN = w.ESSn
inner join Project as p
on p.Pnumber = w.Pno and p.Pname = 'Al Rabwah'