<!DOCTYPE html>
<html>
<head>
  <title>Bookstore</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Bookstore</h1>
    <nav>
      <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="cart.php">Cart</a></li>
        <li><a href="checkout.php">Checkout</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h2>Featured Books</h2>
    <ul class="book-list">
      <?php
        require_once('database.php');
        $books = $database->query("SELECT * FROM books LIMIT 3");
        foreach ($books as $book) {
          echo "<li>";
          echo "<img src='images/{$book['image']}' alt='{$book['title']}' />";
          echo "<h3>{$book['title']}</h3>";
          echo "<p>{$book['description']}</p>";
          echo "<p>Price: {$book['price']}</p>";
          echo "<form method='post' action='add_to_cart.php'>";
          echo "<input type='hidden' name='book_id' value='{$book['id']}' />";
          echo "<button type='submit'>Add to Cart</button>";
          echo "</form>";
          echo "</li>";
        }
      ?>
    </ul>
  </main>
</body>
</html>

