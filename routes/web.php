<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//auth routes
// Auth::routes(['verify' => true]);

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware();


Route::inertia('/login', 'auth.Login')->name('login');
Route::inertia('/register', 'auth.Register');
// Route::view('/', 'welcome');
