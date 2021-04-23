<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SanPham;
use App\LoaiSanPham;
use PhpParser\Node\Expr\FuncCall;
use Illuminate\Support\Facades\DB;

class SanPhamController extends Controller
{
    //
    public function index()
    {
        // $loai=LoaiSanPham::orderby('TenLoai','ASC')->get();
        // return $loai;
        $sanpham['listsanpham']=SanPham::where('TrangThai',1)->paginate(5);
        // return $sanpham;
        return view('pages.quan-ly-san-pham',$sanpham);
    }

    public function ThemSanPham()
    {
        $data= LoaiSanPham::all();
        return view('pages.them.them-san-pham',compact('data'));
    }

    public function SuaSanPham($id)
    {
        $data=SanPham::find($id);
        $data= SanPham::where('id',$id)->get();
        // $data=DB::select('select * from san_phams  where id =?', [$id]);
        // return $data;
        $loaisanpham=LoaiSanPham::get();
        return view('pages.cap-nhat.cap-nhat-san-pham',compact('data','loaisanpham'));
    }

    public function InsertProducts(Request $request)
    {
        $data= new SanPham;
        $data->TenSanPham=$request->ten_san_pham;
        $data->CauHinh=$request->cau_hinh;
        $data->ThongTin=$request->thong_tin;
        $data->XuatXu=$request->xuat_xu;
        $data->loai_san_phams_id=$request->loai;
        $data->save();
        // return $data;
        return redirect('/quan-ly-san-pham');
    }

    public function UpdateProduct(Request $request, $id)
    {
            $data= SanPham::find($id);
            $data->TenSanPham=$request->ten_san_pham;
            $data->CauHinh=$request->cau_hinh;
            $data->ThongTin=$request->thong_tin;
            $data->XuatXu=$request->xuat_xu;
            $data->loai_san_phams_id=$request->loai;
            $data->save();
            return redirect('/quan-ly-san-pham');
    }

    public function DeleteProduct($id)
    {
        $data = SanPham::find($id);
        $data->TrangThai= 0;
        $data->save();
        return redirect('/quan-ly-san-pham');
    }
}
