<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Dane extends Model
{
    use HasFactory;
    
    protected $table = 'dane';

    protected $fillable = [
        'imie',
        'nazwisko',
        'wiek',
        'email',
        'haslo'
    ];
}
