<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT *
  FROM Member AS M, CertificationStatus AS CS, Certification AS C
  WHERE M.member_id = CS.member_id AND C.certification_id = CS.certification_id AND M.member_id= ? ');
$stmt->execute([
  $_POST['member_id']
]
);
$certs = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certs, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
