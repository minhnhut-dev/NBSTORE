<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class AddressUserController extends Controller
{
    //
    public function getCity()
    {
        $city = DB::table('provinces')->get();
        return response()->json($city);
    }
    public function district($idCity)
    {
        $districts = DB::table('districts')
                    ->select('*')
                    ->where('districts.province_id','=',$idCity)
                    ->get();
        return response()->json($districts);
    }
    // public function getWard($idDistrict)
    // {
    //     $response= Http::get('https://thongtindoanhnghiep.co/api/district/'.$idDistrict.'/ward');
    //     return $response;
    // }
}
