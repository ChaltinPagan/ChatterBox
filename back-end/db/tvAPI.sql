-- DROP DATABASE IF EXISTS chatterbox;
-- CREATE DATABASE chatterbox;

-- \c chatterbox;

-- DROP TABLE IF EXISTS episodes;
-- DROP TABLE IF EXISTS shows;


CREATE TABLE shows (
  id INTEGER PRIMARY KEY UNIQUE,
  name TEXT,
  type TEXT,
  language TEXT,
  img_URL TEXT,
  show_summary TEXT,
  network_name TEXT,
  rating INTEGER,
  popularity INTEGER,
  active BOOLEAN
);

CREATE TABLE episodes (
  id SERIAL PRIMARY KEY,
  show_id INTEGER REFERENCES shows(id),
  air_date VARCHAR,
  air_time VARCHAR,
  season INTEGER,
  num INTEGER,
  ep_summary TEXT,
  ep_name TEXT
);


