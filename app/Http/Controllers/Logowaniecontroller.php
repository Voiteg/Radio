<?php

namespace App\Http\Controllers;

use App\Models\Dane;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Logowaniecontroller extends Controller
{
    public function Logowanie(Request $request){
       $request->validate([
        "email" => 'required|string',
        "haslo" => 'required|string'
     ]); $dane = Dane::where('email', $request->email)->first();
        if($dane && Hash::check($request->haslo, $dane->haslo)){
            Auth::login($dane);
            return redirect('/glowna');
        } else {
            return redirect('/lobby')->with("Nie udało sie zalogować");
        } 
    }
    public function wyloguj(){
        Auth::logout();
        return redirect('/lobby');
    }
}