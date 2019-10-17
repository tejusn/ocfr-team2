<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare ('SELECT Member.member_id, Member.first_name, Member.last_name, Certification.certification_name, Certification.default_exp_period
  FROM Member
  INNER JOIN CertificationStatus on Member.member_id = CertificationStatus.member_id
  INNER JOIN Certification on Certification.certification_id = CertificationStatus.certification_id ');

$stmt->execute();
$membersExpCerts = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($membersExpCerts, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
