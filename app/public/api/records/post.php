<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$muid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Member
  (member_id, first_name, last_name, position, gender, dob,
    address, email, work_phone, mobile_phone, start_date, station, is_active, radio_number)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )'
);

$stmt->execute([
  $muid,
  $_POST['first_name'],
  $_POST['last_name'],
  $_POST['position'],
  $_POST['gender'],
  $_POST['dob'],
  $_POST['address'],
  $_POST['email'],
  $_POST['work_phone'],
  $_POST['mobile_phone'],
  $_POST['start_date'],
  $_POST['station'],
  $_POST['is_active'],
  $_POST['radio_number'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?muid='.$muid);
