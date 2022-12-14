<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
use App\Http\Controllers\AccountController;
Route::get('/accounts', [AccountController::class, "allAccounts"]);
Route::get('/account/{id}', [AccountController::class, "getAccount"]);
Route::post('/topupaccount', 'App\Http\Controllers\AccountController@topUpAccount');
