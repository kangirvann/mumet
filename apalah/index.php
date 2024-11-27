
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <video class="bg-video" autoplay loop muted>
        <source src="style/videoplayback.webm" type="video/webm">
    </video>
    <div id="admin">
        <div class="wrapper">
            <form action="login.php" method="POST" >
                <h1>Login</h1>
                <div id="usernameInput" class="input-box">
                    <input type="text" placeholder="Username" required name="username" >
                    <i class='bx bxs-user'></i>
                </div>
                <div id="passwordInput" class="input-box">
                    <input type="password" placeholder="Password" required name="password" >
                    <i class='bx bxs-lock-alt'></i>
                </div>

                <button type="submit" class="btn" name="login" >Login</button>
            </form>
        </div>
    </div>

</body>

</html>