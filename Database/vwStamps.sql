DROP VIEW IF EXISTS stamps.vwStamps;

CREATE VIEW stamps.vwStamps AS

SELECT	id,
		denomination,
        description,
        year,
        color,
        IF (image IS NULL, False, True) AS has_image,
        image_type
  FROM	stamp
  