--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Street (id INTEGER PRIMARY KEY, name TEXT, cityId INTEGER);
INSERT INTO Street (id, name, cityId) VALUES (7338, 'Markt', 23);
INSERT INTO Street (id, name, cityId) VALUES (5514, 'Papenboslaan', 13);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Street;
