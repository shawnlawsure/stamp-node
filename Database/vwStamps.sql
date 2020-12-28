DROP VIEW IF EXISTS stamps.vwStamps;

CREATE VIEW stamps.vwStamps AS

SELECT	id,
		denomination,
        description,
        year,
        color
  FROM	stamp
  