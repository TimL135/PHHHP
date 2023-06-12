<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth')->group(
    function () {
        Route::controller(TaskController::class)->group(function () {
            Route::post("/{group}/addTask",  "addTask");
            Route::post("/{group}/{task}/editTask",  "editTask");
            Route::post("/{task}/deleteTask",  "deleteTask");
        });
        Route::controller(GroupController::class)->group(function () {
            Route::post("/addGroup",  "addGroup");
            Route::get("/searchGroup",  "searchGroup");
            Route::post("/{group}/joinGroup",  "joinGroup");
            Route::post("/{group}/leaveGroup",  "leaveGroup");
            Route::post("/{group}/editSettingsGroup",  "editSettingsGroup")->middleware("hasGroupPermission");
        });
    }
);
