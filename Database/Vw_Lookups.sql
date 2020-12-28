CREATE VIEW `Lookups` AS

SELECT	lookup.Id AS LookupId,
		lookup.Code AS LookupCode,
        lookup.Name AS LookupName,
        LValue.Id AS ValueId,
        LValue.Code AS ValueCode,
        LValue.Text AS ValueText
  FROM	lookup
 INNER JOIN	lookupvalue AS LValue ON lookup.Id = LValue.LookupId