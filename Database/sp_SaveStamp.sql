DELIMITER $$

DROP PROCEDURE IF EXISTS stamps.sp_SaveStamp$$

CREATE PROCEDURE stamps.sp_SaveStamp (
	pId CHAR(36), 
	pDenomination DECIMAL(5, 2), 
    pDescription VARCHAR(256), 
    pYear VARCHAR(4), 
    pColor VARCHAR(128), 
    OUT newId CHAR(36))
BEGIN
    
    DECLARE stampId CHAR(36) DEFAULT NULL;

	SET stampId = pId;
    
    IF (stampId IS NULL OR stampId = '') THEN
    
		SET stampId = UUID();
        
		INSERT INTO stamps.stamp
			   (id,
				denomination,
				description,
				year,
                color)
		VALUES (stampId,
				pDenomination,
				pDescription,
                pYear,
                pColor);
			
		SET newId = LAST_INSERT_ID();
        
    ELSE
    
		UPDATE 	stamps.stamp
           SET	denomination = pDenomination,
				description = pDescription,
                year = pYear,
                color = pColor
		 WHERE	id = stampId;
			        
    END IF;

	SET newId = stampId;
    
END$$