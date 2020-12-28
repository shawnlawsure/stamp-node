DELIMITER $$

DROP PROCEDURE IF EXISTS stamps.sp_SaveStampImage$$

CREATE PROCEDURE stamps.sp_SaveStampImage (
	pId CHAR(36), 
	pImage LONGBLOB)
BEGIN

	UPDATE 	stamps.stamp
	   SET	image = pImage
	 WHERE	id = pId;
			            
END$$