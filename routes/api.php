<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NiveauController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/niveau', [NiveauController::class, "get"]);
    Route::get("/branche/{id}", [NiveauController::class, "getBranche"]);
 
});
Route::post('/matiere', [NiveauController::class, "getMatiere"]);


Route::post('/signup', [UserController::class, "signup"]);
Route::post('/login', [UserController::class, "login"]);



