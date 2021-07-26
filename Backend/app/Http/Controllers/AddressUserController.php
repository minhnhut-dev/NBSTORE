<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

class AddressUserController extends Controller
{
    //
    public function getCity()
    {
        $response=Http::get('https://thongtindoanhnghiep.co/api/city');
        // dd($response);
        return $response;
    }
    public function getProvince($idCity)
    {
        $response= Http::get('https://thongtindoanhnghiep.co/api/city/'.$idCity.'/district');
        return $response;
    }
    public function getWard($idDistrict)
    {
        $response= Http::get('https://thongtindoanhnghiep.co/api/district/'.$idDistrict.'/ward');
        return $response;
    }
}
