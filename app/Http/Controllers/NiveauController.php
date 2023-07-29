<?php

namespace App\Http\Controllers;
use App\Models\Niveau;
use App\Models\Matiere;
use Illuminate\Http\Request;

class NiveauController extends Controller
{
    public function get(){
        $niveaux = Niveau::get()->toArray();
        return response()->json($niveaux); 
    }

    public function getBranche($id){
        $niveau = Niveau::where('id', $id)->first();
        $response = [
            'niveau' => $niveau,
            'branches' => $niveau->branches,
        ];
        return response()->json($response);
    }

    public function getMatiere(Request $request){
        $niveau_id = $request->niveau_id;
        $branche_id = $request->branche_id;
        $matieres = Matiere::with('niveau', 'branche')->where('niveau_id', $niveau_id)->where('branche_id', $branche_id)->get();
        
        return response()->json($matieres);
    }
}
