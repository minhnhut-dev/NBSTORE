<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AnhSanPham;
class AnhSanPhamController extends Controller
{
    //
    public function InsertImageProducts(Request $request)
    {
        $data=new AnhSanPham();
        $data->san_phams_id=$request->san_phams_id;
        if ($request->hasFile('hinh_anh')) {
            $image = $request->file('hinh_anh');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
            $HinhAnh = $name;
        } else {
            $HinhAnh = "meo.jpg"; // nếu k thì có thì chọn tên ảnh mặc định ảnh mặc định
        }
        $data->AnhSanPham = $HinhAnh;
        $data->save();
        return redirect('/quan-ly-san-pham');
    }
}
