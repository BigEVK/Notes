SHOW DATABASES;
SHOW TABLES;
select database(); -- shows current database
USE <database>; -- Switches to that database
CREATE TABLE
SELECT * FROM candidates; -- a query that will return all rows of data in a table, this one is called candidates

VARCHAR - variable character


DROP DATABASE election;

CREATE TABLE candidates (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    industry_connected BOOLEAN NOT NULL
    );

INSERT INTO candidates (first_name, last_name, industry_connected)
VALUES 
('Virginia', 'Woolf', 1),
('Piers', 'Gaveston', 0),
('Charles', 'LeRoi', 1),
('Katherine', 'Mansfield', 1),
('Dora', 'Carrington', 0),
('Edward', 'Bellamy', 0),
('Montague', 'Summers', 1),
('Octavia', 'Butler', 1),
('Unica', 'Zurn', 1);

-- To update rows in a table you name the table to UPDATE, name which filed is to be updated in SET,
-- and name which specific id is to be updated using WHERE
UPDATE candidates
SET industry_connected = 1
WHERE id = 3;

-- to deleted a row 
DELETE FROM candidates
WHERE first_name = "Montague"; -- If the primary key is known, this is preferred over using a name

help -- List of all MySQL commands:
Note that all text commands must be first on line and end with ';'
-- ?         (\?) Synonym for `help'.
clear     (\c) Clear the current input statement.
connect   (\r) Reconnect to the server. Optional arguments are db and host.
delimiter (\d) Set statement delimiter.
ego       (\G) Send command to mysql server, display result vertically.
exit      (\q) Exit mysql. Same as quit.
go        (\g) Send command to mysql server.
help      (\h) Display this help.
notee     (\t) Don't write into outfile.
print     (\p) Print current command.
prompt    (\R) Change your mysql prompt.
quit      (\q) Quit mysql.
rehash    (\#) Rebuild completion hash.
source    (\.) Execute an SQL script file. Takes a file name as an argument.
status    (\s) Get status information from the server.
system    (\!) Execute a system shell command.
tee       (\T) Set outfile [to_outfile]. Append everything into given outfile.
use       (\u) Use another database. Takes database name as argument.
charset   (\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.
warnings  (\W) Show warnings after every statement.
nowarning (\w) Don't show warnings after every statement.

-- If you get an error stating that the database or table does not exist, 
-- you can start over and create the database again by running the following command:
source db/db.sql
-- This will execute the SQL commands in the db.sql file to drop the election database and create it again.
-- To check that the election database was created
SHOW DATABASES;
-- create the table for candidates
source db/schema.sql
-- check that the candidates table was created correctly
SHOW TABLES;
-- seed the candidates table
source db/seeds.sql
-- check whether the database is correctly seeded and ready to go
SELECT * FROM candidates;
-- To exit the MySQL command line, type quit; or exit;.

