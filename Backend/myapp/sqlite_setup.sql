.mode csv
.import ./table.csv DJI



select * from DJI where code = 'AAPL' and date = '2015-01-06';

select * from DJI where code = 'MMM' and date = '2015-01-06';

DELETE FROM DJI WHERE Code = 'Code';
DELETE FROM DJI WHERE Code is null;
select * from DJI where date = '2015-01-06';
