<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Matiere;

class Branche extends Model
{
    use HasFactory;
    
    public function matieres()
    {
        return $this->hasMany(Matiere::class);
    }
    
}
