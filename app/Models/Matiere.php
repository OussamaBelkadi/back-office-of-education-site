<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Niveau;
use App\Models\Branche;

class Matiere extends Model
{
    use HasFactory;

    public function niveau(){
        return $this->belongsTo(Niveau::class);
    }

    public function branche(){
        return $this->belongsTo(Branche::class);
    }
  
}
