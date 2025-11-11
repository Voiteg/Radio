<?php

namespace App\Http\Controllers;

use App\Models\Dane;
use App\Mail\Mailpowitalny;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
    ]); 
        $mail = $request->email;
        Mail::to($mail)->send(new Mailpowitalny);
    if($dane && Hash::check($request->haslo, $dane->haslo)){
            Auth::login($dane);
        
        return response()->json([
            'success' => true,
            'redirect' => '/main'
        ]);
    }else{
        return response()->json([
            'success' => false,
            'message' => 'Nieprawidłowy email lub hasło.'
        ], 401);
    }
}


}
