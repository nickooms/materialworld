--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Category (id INTEGER PRIMARY KEY, name TEXT);
INSERT INTO Category (id, name) VALUES (1, 'Business');
INSERT INTO Category (id, name) VALUES (2, 'Technology');
CREATE TABLE Post (id INTEGER PRIMARY KEY, name TEXT);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Category;
DROP TABLE Post;
