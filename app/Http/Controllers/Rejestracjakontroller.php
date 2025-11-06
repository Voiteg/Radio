<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dane;

class Rejestracjakontroller extends Controller
{
    public function Rejestracja(Request $request){
     $request->validate([
        "imie" => 'required|string',
        "nazwisko" => 'required|string',
        "wiek" => 'required|integer',
        "email" => 'required|string',
        "haslo" => 'required|string'
     ]);
     $dane = Dane::create([
        'imie' => $request->imie,
        'nazwisko' => $request->nazwisko,
        'wiek' => $request->wiek,
        'email' => $request->email,
        'haslo' => $request->haslo
     ]); return redirect('/main');
    }
}
