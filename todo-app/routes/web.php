<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     // return view('welcome');
//     return Inertia::render('Home');
// });

Route::get('/', [UserController::class,'index']);
Route::get('/create', [UserController::class,'create']);
Route::post('/save', [UserController::class,'store']);
Route::get('/edit/{id}', [UserController::class,'edit']);
Route::post('/update/{id}', [UserController::class,'update']);
Route::get('/delete/{id}', [UserController::class,'destroy']);