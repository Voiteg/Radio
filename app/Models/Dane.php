<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dane extends Model
{
    protected $table = 'dane';

    protected $fillable = [
        'imie',
        'nazwisko',
        'wiek',
        'email',
        'haslo'
    ];
}
