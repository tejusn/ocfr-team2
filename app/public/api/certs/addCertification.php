<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$muid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Certification
  (certification_id, certification_name, certifying_agency, default_exp_period)
  VALUES (?, ?, ?, ? )'
);

$stmt->execute([
  $muid,
  $_POST['certification_id'],
  $_POST['certification_name'],
  $_POST['certifying_agency'],
  $_POST['default_exp_period'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certs/?muid='.$muid);
