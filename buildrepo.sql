
#################################################
#       宿舍管理系统
#       author: iwen
#       salt: zui%shu@i@(iwen)
#   root root: rootzui%shu@i@(iwen)
#   sha2 root result: 9f909bd7fbc0e71595772c22c97db5677c25acb5a938e88a181825a95e954e879a60bf42a202577e1cc78d0da6882f2135f0621479f96150b0da43774022ff53
#################################################
drop database if exists db_dorm;

create database db_dorm;
use db_dorm;

set auto_increment_increment=5;

#超级管理员
create table tab_root(
    id int(11) not null AUTO_INCREMENT,
    username varchar(20) not null,
    `password` varchar(200) not null,
    primary key(`id`),
    UNIQUE KEY (`username`)
) engine=innodb;


#宿管
create table tab_administrator(
    id int(11) not null AUTO_INCREMENT,
    name varchar(10) not null,
    job_num varchar(20) not null,
    phone_num varchar(11),
    `password` varchar(200) not null,
    room_no varchar(10),
    gender boolean not null,
    primary key(`id`),
    unique key(`job_num`)
)engine=InnoDb;

#楼房
create table tab_build(
    id int(11) not null AUTO_INCREMENT,
    build_name varchar(20) ,
    build_position varchar(60),
    admini_id int(11),
    primary key(id),
    foreign key (admini_id) references tab_administrator (id)
)engine=innodb;

#楼层
create table tab_floor(
    id int(11) not null AUTO_INCREMENT,
    room_num int ,
    people_num int ,
    build_id int(11),
    floor_alias varchar(11),
    primary key(id),
    foreign key(build_id) references tab_build(id)
)engine=innodb;

#room
create table tab_room(
    id int(11) not null AUTO_INCREMENT,
    room_alias varchar(10),
    floor_id int(11),
    room_long int(11),
    people_num int,
    primary key(id),
    foreign key(floor_id) references tab_floor(id)
)engine=innodb;

#床
create table tab_bed(
    id int(11) not null AUTO_INCREMENT,
    room_id int(11),
    bed_num int,
    stu_id int(11),
    primary key(id),
    foreign key(room_id) references tab_room(id)
)engine=innodb;


#学生
create table tab_student(
    id int(11) not null AUTO_INCREMENT,
    stu_num varchar(20),
    room_no varchar(10),
    name varchar(10) not null,
    gender boolean not null,
    phone_num varchar(11),
    stu_class  varchar(40),
    stu_coach_no  varchar(11),
    bad_num varchar(10),
    primary key(id),
    unique key(stu_num)
)engine=Innodb;

#admini_id int(11),是本次的登记人
create table tab_gradle(
    id int(11) not null AUTO_INCREMENT,
    room_id int(11),
    sanitation varchar(400),
    bed varchar(400),
    lavatory varchar(400),
    desktop varchar(400),
    admini_id int(11),
    primary key(id),
    foreign key(room_id) references tab_room(id)
)engine=Innodb;

create table tab_water_rate(
    id int(11) not null AUTO_INCREMENT,
    in_date varchar(20),
    water_rate int,
    admini_id int(11),
    room_id int(11),
    primary key(id),
    foreign key(admini_id) references tab_administrator (id)
)engine=innodb;

create table tab_call_board(
    id int(11) not null AUTO_INCREMENT,
    in_date varchar(20),
    show_date varchar(20),
    admini_id int(11),
    content varchar(400),
    primary key(id),
    foreign key(admini_id) references tab_administrator (id)
)engine=innodb;


create table tab_visitor(
    id int(11) not null AUTO_INCREMENT,
    in_date varchar(20),
    admini_id int(11),
    remark varchar(400),
    name varchar(20),
    phone_num varchar(11),
    gender boolean ,
    primary key(id),
    foreign key(admini_id) references tab_administrator (id)
)engine=innodb;

create table tab_illegal_record(
    id int(11) not null AUTO_INCREMENT,
    in_date varchar(20),
    admini_id int(11),
    remark varchar(400),
    stu_num int(11),
    primary key(id),
    foreign key(admini_id) references tab_administrator (id)
)engine=innodb;

insert into tab_root(username, password) values('root', '9f909bd7fbc0e71595772c22c97db5677c25acb5a938e88a181825a95e954e879a60bf42a202577e1cc78d0da6882f2135f0621479f96150b0da43774022ff53');