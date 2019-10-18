<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$muid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM Member
  WHERE member_id = ?'
);
// $sql = "UPDATE articles SET article_title = :title, article_content = :content, article_timestamp = :timestamp
// WHERE article_id = :id";
//       $query = $pdo->prepare($sql);
//
//       $query->bindValue(":title", $title);
//       $query->bindValue(":content", $content);
//       $query->bindValue(":timestamp", time());
//       $query->bindValue(":id", $id);

$stmt->execute([
  $_POST['member_id']
]);
if( ! $stmt->rowCount() ) echo "Deletion failed";
 else{echo "failure";}

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?member_id='.member_id);
