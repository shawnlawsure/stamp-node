CREATE FUNCTION mowdb.getLookupValue (pLookupCode VARCHAR(3), pLookupValueCode VARCHAR(3))
RETURNS INTEGER
NOT DETERMINISTIC
BEGIN

    DECLARE statusId INT DEFAULT NULL;
    
	SET statusId = 	(SELECT	lookupvalue.Id 
					  FROM	lookupvalue
							INNER JOIN lookup ON lookupvalue.LookupId = lookup.Id
                     WHERE	lookup.Code = pLookupCode AND
							lookupvalue.Code = pLookupValueCode);

	RETURN statusId;

END