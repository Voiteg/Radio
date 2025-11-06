<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/rej" method="post">
        @csrf
        <input type="text" name="imie"><br>
        <input type="text" name="nazwisko"><br>
        <input type="number" name="wiek"><br>
        <input type="text" name="email"><br>
        <input type="password" name="haslo"><br>
        <input type="submit" value="Zajerestruj"><br>
    </form>
<br><br><br><br><br>
       <form action="/log" method="post">
        @csrf
        <input type="text" name="email"><br>
        <input type="password" name="haslo"><br>
        <input type="submit" value="Zajerestruj"><br>
    </form>
</body>
</html>