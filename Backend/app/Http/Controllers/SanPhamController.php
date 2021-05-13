<?php

namespace App\Http\Controllers;
use App\Components\Recursion;
use Illuminate\Http\Request;
use App\SanPham;
use App\LoaiSanPham;
use App\CauHinh;
class SanPhamController extends Controller
{
    //
    private $LoaiSanPham;
    public function __construct(LoaiSanPham $LoaiSanPham)
    {
        $this->htmlselect = '';
        $this->LoaiSanPham = $LoaiSanPham;
    }
    public function index()
    {

        $sanpham['listsanpham']=SanPham::where('TrangThai',1)->paginate(5);
        // return $data;
        //  return $data;
        return view('pages.quan-ly-san-pham',$sanpham);
    }

    public function ThemSanPham()
    {
        $data= LoaiSanPham::where('TrangThai',1)->get();
        $dataOption =$this->LoaiSanPham::where('TrangThai',1)->get();
        $Recursion = new Recursion($dataOption);
        $htmlOption=$Recursion->cat_parent();
        return view('pages.them.them-san-pham',compact('data','htmlOption'));
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
