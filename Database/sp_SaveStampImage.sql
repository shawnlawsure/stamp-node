DELIMITER $$

DROP PROCEDURE IF EXISTS stamps.sp_SaveStampImage$$

CREATE PROCEDURE stamps.sp_SaveStampImage (
	pId CHAR(36), 
	pImage LONGBLOB,
    pImageType VARCHAR(25))
BEGIN

	UPDATE 	stamps.stamp
	   SET	image = pImage,
			image_type = pImageType
	 WHERE	id = pId;
			            
END$$