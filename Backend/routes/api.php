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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ProductDealInMonth', 'SanPhamController@GetProductSeal');

Route::get('/GetImageProductByID/{id}', 'SanPhamController@GetImageProductByid');

Route::get('/GetProductByID/{id}', 'SanPhamController@GetProductById');
Route::get('/GetProductMouse', 'SanPhamController@GetProductMouse');


Route::get('/config-by-category/{id}', 'SanPhamController@ConfigByCategory');
Route::post('/add-configs-to-category/{id}', 'LoaiSanPhamController@AddConfigsAPI');
Route::post('/add-config/{id}', 'LoaiSanPhamController@AddConfigAPI');
Route::post('/delete-configs-from-category/{id}', 'LoaiSanPhamController@DeleteConfigsAPI');

Route::post('/Register','AuthController@Register');
Route::post('/Login','AuthController@Login');


//order api
Route::post('/order', 'OrderController@create');
Route::post('/orderAPI', 'OrderController@createAPI');
// mail xác thực 
Route::get('user/activation/{token}', 'AuthController@activateUser')->name('user.activate');
Route::get('user/reset-password/{token}', 'AuthController@resetPasswordUser')->name('user.reset-password');
// client call api
Route::post('user/reset-password-client/{token}', 'AuthController@resetPasswordUserClient');
Route::get('user/forgot-password/{id}', 'AuthController@ForgotPassword');
