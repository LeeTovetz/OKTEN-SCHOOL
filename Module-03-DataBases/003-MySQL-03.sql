# 1. +Select all customers whose name is less than 6 characters.

SELECT * FROM client WHERE length(FirstName)<6;

#2. +Choose Lviv bank branches.+

SELECT * FROM department WHERE DepartmentCity='Lviv';

#3. +Select clients with higher education and sort by last name.

SELECT * FROM client WHERE EducatiON='high' ORDER BY LAStName;

#4. +Sort in reverse order over the Application table and display the last 5 items.

SELECT * FROM client ORDER BY idClient desc limit 5;

#5. +List all clients whose last name ends in OV or OVA.

SELECT * FROM client WHERE LAStName LIKE ('%ov' or '%ova');

#6. +Withdraw bank customers who are served by Kyiv branches.

SELECT client.FirstName,client.LAStName,d.DepartmentCity FROM client JOIN department d ON client.Department_idDepartment = d.idDepartment
WHERE d.DepartmentCity='kyiv';

#7. +Display customer names and their phone numbers, grouped by name.

SELECT FirstName,PASsport FROM client GROUP BY FirstName;

#8. +Print data on customers who have a loan of more than 5,000.

SELECT client.FirstName,client.LAStName,a.Sum AS SumaCredit FROM client
JOIN applicatiON a ON client.idClient = a.Client_idClient WHERE a.Sum<5000;

#9. +Count the number of customers of all branches and only Lviv branches.

SELECT count(client.idClient) FROM client;
SELECT count(Client.idClient) FROM client JOIN department d ON client.Department_idDepartment = d.idDepartment
WHERE d.DepartmentCity='lviv';

#10. Find the loans that have the largest amount for each client separately.

SELECT sum(Sum) AS sumOfCredits,FirstName,LAStName,idClient FROM applicatiON JOIN
    client c ON applicatiON.Client_idClient = c.idClient  GROUP BY idClient  ORDER BY sumOfCredits desc;

#11. Determine the number of loan applications for each client.

SELECT FirstName,LAStName, count(Client_idClient) AS Num_of_applicatiONs FROM applicatiON JOIN
    client c ON applicatiON.Client_idClient = c.idClient GROUP BY Client_idClient;

#12. Determine the largest and smallest loans.

SELECT max(Sum),min(Sum) FROM applicatiON;

#13. Count the number of loans for clients with higher education.

SELECT FirstName,LAStName, count(Client_idClient) AS Num_of_Credits FROM applicatiON
    JOIN client c ON applicatiON.Client_idClient = c.idClient WHERE EducatiON='high' GROUP BY Client_idClient;

#14. Display data on the client whose average loan amount is the highest.

SELECT FirstName,LAStName,Client_idClient,avg(Sum) AS Avg_Sum FROM applicatiON
    JOIN client c ON applicatiON.Client_idClient = c.idClient GROUP BY Client_idClient ORDER BY Avg_Sum desc limit 1;


#15. Withdraw the branch that lent the most money

SELECT idDepartment,DepartmentCity,Sum(sumOfCreditsClients) AS SumOfCreditsDepartment FROM(

SELECT FirstName,LAStName,idDepartment,DepartmentCity,Sum(Sum) AS sumOfCreditsClients FROM department
    JOIN client c ON department.idDepartment = c.Department_idDepartment
    JOIN applicatiON a ON c.idClient = a.Client_idClient
GROUP BY idClient) AS T GROUP BY idDepartment ORDER BY SumOfCreditsDepartment desc limit 1;

#16. Withdraw the branch that issued the largest loan.

SELECT idDepartment,DepartmentCity,Sum FROM (
SELECT idClient,FirstName,LAStName,Sum,Department_idDepartment FROM applicatiON
JOIN client c ON applicatiON.Client_idClient = c.idClient
ORDER BY Sum desc limit 1) AS T  JOIN department d ON Department_idDepartment=d.idDepartment;

#17. For all clients with higher education, set all their loans in the amount of UAH 6,000.

UPDATE applicatiON JOIN client c ON applicatiON.Client_idClient = c.idClient
set Sum=6000
WHERE EducatiON='high';

#18. All clients of Kyiv branches should be relocated to Kyiv.

UPDATE client  JOIN department d ON client.Department_idDepartment = d.idDepartment
set City='Kyiv'
WHERE DepartmentCity='Kyiv';

#19. Delete all credits that have been repaid.

DELETE  FROM applicatiON WHERE CreditState='Returned';

#20. Remove customer credits in which the second letter of the last name is a vowel.

DELETE a FROM applicatiON a
    JOIN client c ON a.Client_idClient = c.idClient
WHERE LAStName LIKE '_e%' or  LAStName LIKE '_u%' or LAStName LIKE '_i%' or LAStName LIKE '_o%' or LAStName LIKE '_a%' ;

#Find Lviv branches that have issued loans totaling more than 5,000

SELECT  idDepartment,DepartmentCity,suma FROM(
SELECT idDepartment,DepartmentCity, sum(sum) AS suma FROM applicatiON
JOIN client c ON applicatiON.Client_idClient = c.idClient
JOIN department d ON c.Department_idDepartment = d.idDepartment
  GROUP BY idDepartment ORDER BY idDepartment) AS T WHERE suma>5000 and DepartmentCity='lviv';

#Find customers who have fully repaid loans worth more than 5,000

SELECT idClient, FirstName, LAStName, Sum, CreditState, Currency  FROM client
JOIN applicatiON a ON client.idClient = a.Client_idClient
WHERE Sum>5000 and CreditState='returned';

#/* Find the maximum outstanding loan.*/

SELECT idClient, FirstName, LAStName, Sum, CreditState, Currency  FROM client
JOIN applicatiON a ON client.idClient = a.Client_idClient
WHERE  CreditState='not returned' ORDER BY Sum desc limit 1;

#/*Find the client whose loan amount is the smallest*/

SELECT idClient, FirstName, LAStName, sum(Sum) AS suma, CreditState, Currency  FROM client
JOIN applicatiON a ON client.idClient = a.Client_idClient
 GROUP BY idClient ORDER BY suma limit 1;

#/*Find loans that are greater than the average of all loans*/

SELECT idApplicatiON,CreditState,Currency,suma,(select avg(Sum) FROM applicatiON) AS average FROM (
SELECT *,Sum(sum) AS suma FROM applicatiON
GROUP BY Client_idClient) AS t WHERE suma> (select avg(Sum) FROM applicatiON);

#/*Find customers who are from the same city as the customer who took the most loans*/

SELECT * FROM client WHERE City=

(SELECT City FROM(
select *,count(Client_idClient) AS num,Client_idClient AS id FROM applicatiON
right JOIN client c ON applicatiON.Client_idClient = c.idClient
    GROUP BY Client_idClient ORDER BY num desc limit 1) AS t WHERE id=idClient);


#the city of the person who scored the most credits


SELECT City FROM(
SELECT *,Sum(Sum) AS suma,Client_idClient AS id FROM applicatiON
JOIN client c ON applicatiON.Client_idClient = c.idClient
GROUP BY Client_idClient ORDER BY suma desc limit 1) AS t WHERE id=idClient;

