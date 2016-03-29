.mode csv
.import ./table.csv DJI
select * from DJI where code = 'AAPL' and date = '2015-01-06';