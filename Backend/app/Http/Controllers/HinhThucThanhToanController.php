<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\HinhThucThanhToan;
class HinhThucThanhToanController extends Controller
{
    //
    public function index()
    {
        $data= HinhThucThanhToan::where('TrangThai',1)->get();
        return view('pages.quan-ly-hinh-thuc-thanh-toan',compact('data'));
    }

    public function ThemHinhThucThanhToan()
    {
        return view('pages.them.them-hinh-thuc-thanh-toan');
    }

    public function Insertpayments(Request $request)
    {
        $data=new HinhThucThanhToan();
        $data->TenHinhThuc=$request->ten_hinh_thuc;
        // return $data;
        $data->save();
        return redirect('/quan-ly-hinh-thuc-thanh-toan');
    }

    public function CapNhatHinhThucThanhToan($id)
    {
        $data= HinhThucThanhToan::where('id',$id)->get();
        // return $data;
        return view('pages.cap-nhat.cap-nhat-hinh-thuc-thanh-toan',compact('data'));
    }
    public function UpdatePayments (Request $request, $id)
    {
        $data=HinhThucThanhToan::find($id);
        $data->TenHinhThuc=$request->ten_hinh_thuc;
        $data->save();
        return redirect('/quan-ly-hinh-thuc-thanh-toan');
    }

    public function DeletePayments(Request $request, $id)
    {
        $data= HinhThucThanhToan::find($id);
        $data->TrangThai=0;
        $data->save();
        return redirect('/quan-ly-hinh-thuc-thanh-toan');

    }
}
