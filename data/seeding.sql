BEGIN;

INSERT INTO "artists" 
(name, instrument)
VALUES
('John Coltrane', 'saxophone'),
('Duke Ellington', 'piano'),
('Chick Corea', 'piano'),
('Charles Mingus', 'contrebasse'),
('Sonny Rollins', 'saxophone'),
('Thelonious Monk', 'saxophone'),
('Charlie Parker', 'saxophone'),
('Kenny Dorham', 'trompette');

INSERT INTO "tracks" 
(title, year, artist_id)
VALUES
('Equinox', 1960, 1),
('Don''t Get Around Much Anymore', 1940, 2),
('Satin Doll', 1953, 2),
('Nostalgia in Times Square', 1959, 4),
('Spain', 1971, 3),
('''Round Midnight', 1944, 6),
('Oleo',1954, 5),
('Doxy', 1954, 5),
('Billies''s Bounce', 1945, 7),
('Au privave', 1951, 7),
('Blue Bossa', 1963, 8);

COMMIT;
