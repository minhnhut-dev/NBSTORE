<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', 'TrangChuController@index');

Route::get('/quan-ly-san-pham', 'SanPhamController@index');

Route::get('/quan-ly-san-pham/them-san-pham', 'SanPhamController@ThemSanPham');

Route::post('/them-san-pham' , 'SanPhamController@InsertProducts');
