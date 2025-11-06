<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Rejestracjakontroller;
use App\Http\Controllers\Logowaniecontroller;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/main', function(){
    return view('test');
});
Route::post('/rej', [Rejestracjakontroller::class, 'Rejestracja']);
Route::post('/log', [Logowaniecontroller::class, 'Logowanie']);