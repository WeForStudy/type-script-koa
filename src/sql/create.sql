
CREATE TABLE IF NOT EXISTS admin (
    id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   kind VARCHAR(200) NOT NULL,
   age int NOT NULL
);
comment on column animal.id is 'Primary Key, Unique, Autoincrease';
comment on column animal.name is 'Name of animal';
comment on column animal.kind is 'Kind of animal';
comment on column animal.age is 'Age of animal';

create table animal
(
  id LONG auto_increment comment '主键ID',
  name varchar(255) default 'frank' not null comment '姓名',
  sex int default 2 not null comment '0 女 1 男 2 frank'
);