<?php

namespace App\Http\Controllers;

use App\AnhSanPham;
use Illuminate\Http\Request;

class ImageProductController extends Controller
{
    //
    public static function showImage($id)
    {
        $data=AnhSanPham::where('san_phams_id',$id)->where('TrangThai',1)->get();
        return $data;
    }
    // public function DeleteImageProduct($id)
    // {
    //     $data=AnhSanPham::find($id);
    //     $data->TrangThai=0;
    //     $data->save();
    //     return redirect('quan-ly-san-phanm')
    // }
}
