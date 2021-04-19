<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Model\SanPham;
use App\SanPham as AppSanPham;
use App\LoaiSanPham as AppLoaiSanPham;
class SanPhamController extends Controller
{
    //
    public function index()
    {
        // $loai=AppLoaiSanPham::get();
        // return $loai;
        $sanpham=AppSanPham::all();

        return view('pages.quan-ly-san-pham',compact('sanpham'));
    }

    public function ThemSanPham()
    {
        $data= AppLoaiSanPham::all();
        return view('pages.them.them-san-pham',compact('data'));
    }

    public function InsertProducts(Request $request)
    {
        $data= new AppSanPham();
        $data->TenSanPham=$request->ten_san_pham;
        $data->CauHinh=$request->cau_hinh;
        $data->ThongTin=$request->thong_tin;
        $data->XuatXu=$request->xuat_xu;
        $data->loai_san_phams_id=$request->loai;
        $data->save();
        return redirect('/quan-ly-san-pham');
    }
}
