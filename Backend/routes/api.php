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
Route::get('/getInformationOrderById/{id}','OrderController@getInformationOrderById');
// mail xác thực
Route::get('user/activation/{token}', 'AuthController@activateUser')->name('user.activate');
Route::get('user/reset-password/{token}', 'AuthController@resetPasswordUser')->name('user.reset-password');
// client call api
Route::post('user/reset-password-client/{token}', 'AuthController@resetPasswordUserClient');
Route::post('user/forgot-password', 'AuthController@ForgotPassword');

Route::put('/updateOrder/{id}', 'OrderController@updateOrderPaid');
Route::get('/getOrderUnpaidByUserID/{id}', 'OrderController@GetOrderUnpiadByUserID');
Route::get('/getOrderPaidByUserID/{id}', 'OrderController@GetOrderPaidByUserID');
Route::get('/getOrderDetails/{id}', 'OrderController@GetOrderDetails');
Route::get('/getOrderCompleteByUserId/{id}','OrderController@getOrderCompleteByUserId');
// api build cấu hình

Route::get('/getAccessories','SanPhamController@GetAccessories');
Route::get('/getAccessoriesByTypeProductId/{id}', 'SanPhamController@getTypeProductById');
// API tìm kiếm
Route::get('/getAllProduct','SanPhamController@GetAllProduct');

Route::get('/searchByKeyWord/{keyword}', 'SanPhamController@search');
// API get all types products
Route::get('/getAllTypeProduct','LoaiSanPhamController@getListTypeProduct');
//api get Type product by Id
Route::get('/getTypeProductById/{id}','LoaiSanPhamController@getTypeProductById');
// get Product by Type product Id
Route::get('/getProductByTypeProductId/{id}','SanPhamController@getProductByTypeProductId');
//test
Route::get('/test/{id}','SanPhamController@test');

// User
Route::post('/updateUser/{id}','CustomerController@edit');
Route::post('/updatePassword/{id}','CustomerController@editPassword');

//api slide
Route::post('insert-image-slides', 'ImageSlideController@InsertImageAPI');
Route::get('delete-image-slides', 'ImageSlideController@DeleteImageAPI');
Route::get('get-image-slides', 'ImageSlideController@getURLImages');

