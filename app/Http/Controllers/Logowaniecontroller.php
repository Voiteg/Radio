<?php

namespace App\Http\Controllers;

use App\Models\Dane;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Logowaniecontroller extends Controller
{
    public function Logowanie(Request $request){
    if($_POST){
        $conn = mysqli_connect('127.0.0.1', 'root', '', 'dane');
        $email = $_POST['email'] ?? ''; 
        $haslo = $_POST['haslo'] ?? '';
        $spr = $conn->prepare("SELECT email, haslo FROM dane WHERE email = ? AND haslo = ?");
        $spr->bind_param('ss', $email, $haslo);
        $spr->execute();
        $wynik = $spr->get_result();
        if($wynik -> num_rows > 0){
            echo"zalogowano pomyślnie";
            return redirect('/Radio');
        } else {
            echo "Nie znaleziono urzytkownika lub popełniłeś błond podczas logowanja";
            return redirect('/main');
        }
    }
    }
}