<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));

if ($request[0] !== 'employees') {
    http_response_code(404);
    echo json_encode(['message' => 'Not Found']);
    exit();
}

if ($method === 'GET' && count($request) === 1) {
    $stmt = $pdo->query("SELECT * FROM employees ORDER BY id DESC");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}

elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $pdo->prepare("INSERT INTO employees (name, email, role) VALUES (?, ?, ?)");
    $stmt->execute([$data->name, $data->email, $data->role]);
    echo json_encode(['message' => 'Employee added']);
}

elseif ($method === 'PUT' && isset($request[1])) {
    $id = $request[1];
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $pdo->prepare("UPDATE employees SET name=?, email=?, role=? WHERE id=?");
    $stmt->execute([$data->name, $data->email, $data->role, $id]);
    echo json_encode(['message' => 'Employee updated']);
}

elseif ($method === 'DELETE' && isset($request[1])) {
    $id = $request[1];
    $stmt = $pdo->prepare("DELETE FROM employees WHERE id=?");
    $stmt->execute([$id]);
    echo json_encode(['message' => 'Employee deleted']);
}
?>
