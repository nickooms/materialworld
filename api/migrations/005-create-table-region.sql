--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Region (
  id INTEGER PRIMARY KEY,
  name TEXT
);
INSERT INTO Region (id, name) VALUES (2, 'Vlaams Gewest');

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Region;
