<?php

namespace App\Http\Controllers;
use App\Components\Recursion;
use Illuminate\Http\Request;
use App\LoaiSanPham;
class LoaiSanPhamController extends Controller
{
    private $LoaiSanPham;
    public function __construct(LoaiSanPham $LoaiSanPham)
    {
        $this->htmlselect = '';
        $this->LoaiSanPham = $LoaiSanPham;
    }
    //
    public function index()
    {
        $data['listloaisanpham'] = LoaiSanPham::where('TrangThai', 1)->paginate(5);
        // return $data;
        return view('pages.quan-ly-loai-san-pham', $data);
    }

    public function ThemLoai()
    {
        $data =$this->LoaiSanPham->all();
        $Recursion = new Recursion($data);
        $htmlOption=$Recursion->cat_parent();
        return view('pages.them.them-loai-san-pham', compact('htmlOption'));
    }


    public function CapNhatLoaiSanPham($id)
    {
        // $data=LoaiSanPham::find($id);
        $data = LoaiSanPham::where('id', $id)->get();
        // return $data;
        return view('pages.cap-nhat.cap-nhat-loai-san-pham', compact('data'));
    }
    public function InsertProductType(Request $request)
    {
        $data = new LoaiSanPham;
        $data->TenLoai = $request->ten_loai;
        $data->parent_id = $request->parent_id;
        $data->save();
        return redirect('/quan-ly-loai-san-pham');
        // return $data;
    }

    public function UpdateProductType(Request $request, $id)
    {
        $__parent = 0;
        $data = LoaiSanPham::find($id);
        $data->TenLoai = $request->ten_loai;
        $data->parent_id = $request->parent_id;
        $data->save();
        return redirect('/quan-ly-loai-san-pham');
    }

    public function DeleteProductType($id)
    {
        $data = LoaiSanPham::find($id);
        $data->TrangThai = 0;
        $data->save();
        return redirect('/quan-ly-loai-san-pham');
    }
}
