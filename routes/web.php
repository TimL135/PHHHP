<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', function () {
    return redirect("dashboard");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        "user" => Auth::user(),
        "groups" => Auth::user()->groups->load("tasks")->load("users"),
    ]);
})->middleware(['auth'])->name('dashboard');

Route::get('/groups', function () {
    return Inertia::render('Dashboard', [
        "user" => Auth::user(),
        "groups" => Auth::user()->groups->load("tasks")->load("users"),
    ]);
})->middleware(['auth'])->name('groups');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
