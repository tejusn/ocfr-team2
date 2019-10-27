<?php

// Step 0: Validation
// use Ramsey\Uuid\Uuid;
// $cuid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
use PUGX\Shortid\Shortid;
$cuid=Shortid::generate(7, null, true);
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Certification
  (certification_id, certification_name, certifying_agency, default_exp_period_months)
  VALUES (?, ?, ?, ? )'
);

$stmt->execute([
  $cuid,
  //$_POST['certification_id'],
  $_POST['certification_name'],
  $_POST['certifying_agency'],
  $_POST['default_exp_period_months'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certs/?cuid='.$cuid);
