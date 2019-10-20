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
  'INSERT INTO CertificationStatus
  (certification_status_id, member_id, certification_id, date_of_exp)
  VALUES (?, ?, ?, ? )'
);

$stmt->execute([
  $cuid,
  //$_POST['certification_id'],
  $_POST['memToAssign'],
  $_POST['certToAssign'],
  $_POST['expDate'],
]);

if( $stmt->rowCount() ) echo $stmt->rowCount() +'add successful';
 else{echo "failure";}
// Step 4: Output
//header('HTTP/1.1 303 See Other');
//header('Location: ../assign/?cuid='.$cuid);
